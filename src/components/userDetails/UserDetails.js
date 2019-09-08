import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/actionsIndex';

import {
	Section,
	UserInfo,
	UserReposContainer,
	LoadingIcon,
	ArrowUp,
	ArrowDown,
	Button,
	StaredRepos,
	StaredProject,
	FolderIcon,
	UserImg,
	InfoDiv
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
		const { user } = this.props;
		return (
			<Fragment>
				<UserInfo>
					<Section>
						<UserImg>
							<img
								src={user.avatar_url}
								alt={`${user.name} avartar`}
								height='150px;'
							/>
						</UserImg>
						<UserInfo>
							<section>
								<InfoDiv>
									<strong>Nome: </strong>
									<a
										href={user.html_url}
										target='_blank'
										rel='noopener noreferrer'
									>
										{user.name}
									</a>
								</InfoDiv>

								<InfoDiv>
									<strong>Email: </strong>
									{user.email
										? user.email
										: 'No email registered'}
								</InfoDiv>
								<InfoDiv>
									<strong>Bio:</strong>
									<div>{user.bio}</div>
								</InfoDiv>
							</section>
							<div>
								<p>Followers: {user.followers}</p>
								<p>Following: {user.following}</p>
							</div>
						</UserInfo>
					</Section>
				</UserInfo>
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
