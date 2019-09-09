import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/actionsIndex';

import UserInfo from '../userInfo/UserInfo';

import {
	UserReposContainer,
	LoadingIcon,
	ArrowUp,
	ArrowDown,
	Button,
	StaredRepos,
	StaredProject,
	FolderIcon
} from './UserDetails.styles';
import UserRepos from '../userRepos/UserRepos';

class UserDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSorted: false,
			asc: false,
			starredProjects: [],
			navSelectedRepo: null,
			shouldRedirect: false
		};
		this.handleSortRepos = this.handleSortRepos.bind(this);
	}

	handleSortRepos() {
		this.sortRepos();
	}

	async handleNavClick(repo) {
		await this.props.setRepo(repo.full_name);
		this.setState({
			...this.state,
			shouldRedirect: true,
			navSelectedRepo: repo
		});
	}

	sortRepos() {
		const sorted = this.props.userRepos.sort((a, b) => {
			if (this.state.asc) return b.stargazers_count - a.stargazers_count;
			else if (!this.state.asc)
				return a.stargazers_count - b.stargazers_count;
		});
		this.props.setSortedRepos(sorted);
		this.setState({
			...this.state,
			asc: !this.state.asc,
			sSorted: true
		});
	}

	render() {
		if (!!this.props.userError) return <div>Usuárion não encontrado</div>;
		if (!this.props.user) return <div>Busque um usuário</div>;
		if (this.state.shouldRedirect)
			return (
				<Redirect to={`repo_detail/${this.state.navSelectedRepo.id}`} />
			);
		return (
			<Fragment>
				{this.props.user ? <UserInfo user={this.props.user} /> : null}
				<StaredRepos>
					{this.props.popRepos
						? this.props.popRepos.map(repo => (
								<StaredProject
									key={repo.id}
									onClick={() => this.handleNavClick(repo)}
								>
									<FolderIcon />
									<div>{repo.name}</div>
								</StaredProject>
						  ))
						: null}
				</StaredRepos>
				<UserReposContainer>
					{this.props.userRepos ? (
						<Button onClick={this.handleSortRepos}>
							{this.state.asc ? <ArrowUp /> : <ArrowDown />}
						</Button>
					) : null}
					{this.props.userRepos
						? this.props.userRepos.map(repo => {
								return <UserRepos key={repo.id} repo={repo} />;
						  })
						: null}
				</UserReposContainer>
				{this.props.isLoading ? <LoadingIcon /> : null}
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		userError: state.userSearchReducer.userError,
		user: state.userSearchReducer.user,
		userRepos: state.reposReducer.repos,
		popRepos: state.reposReducer.popRepos,
		isLoading: state.loadingReducer.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		resetUser: () => dispatch(actions.resetUser()),
		setSortedRepos: repos => dispatch(actions.setSortedRepos(repos)),
		setRepo: repoFullName => dispatch(actions.getRepo(repoFullName))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserDetails);
