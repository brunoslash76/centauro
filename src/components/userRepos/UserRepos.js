import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/actionsIndex';

import {
	RepoContainer,
	Icon,
	Div,
	EmptyStar,
	Star,
	StarCountContainer,
	StarContainer,
	CountContainer
} from './UserRepos.styles';

class UserRepos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldRedirect: false,
			repoFullName: null,
			reload: false
		};
	}

	async handleRepoClick(repoFullName) {
		await this.props.setRepo(repoFullName);
		this.setState({
			shouldRedirect: true,
			repoFullName
		});
	}

	placeStars(starCount) {
		let stars = [];
		while (starCount > 0) {
			stars.push(<Star key={starCount} />);
			starCount--;
		}
		return stars;
	}

	render() {
		if (!this.props.repos) {
			return <Fragment />;
		}

		if (this.state.shouldRedirect) {
			return <Redirect to={`repo_detail/${this.props.repo.id}`} />;
		}

		return (
			<RepoContainer>
				<Div onClick={() =>this.handleRepoClick(this.props.repo.full_name)}>
					<Icon />
					<Div>
						<span>{this.props.repo.name}</span>
					</Div>
				</Div>
				<div>
					<StarCountContainer>
						<StarContainer>
							{this.props.repo.stargazers_count > 0 ? <Star /> : <EmptyStar />}
						</StarContainer>
						<CountContainer>
							{this.props.repo.stargazers_count}
						</CountContainer>
					</StarCountContainer>
				</div>
			</RepoContainer>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.userSearchReducer.user,
		repos: state.reposReducer.repos
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getRepos: username => dispatch(actions.getRepos(username)),
		setRepo: repoFullName => dispatch(actions.getRepo(repoFullName)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserRepos);
