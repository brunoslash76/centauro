import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/actionsIndex';

import { RepoContainer, Icon, Div } from './UserRepos.styles';


class UserRepos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldRedirect: false,
			repoFullName: null,
			reload: false,
		};
	}

	handleRepoClick(repoFullName) {
		this.setState({
			shouldRedirect: true,
			repoFullName
		});
	}

	render() {
		if (!this.props.repos) {
			return <Fragment />;
		}

		if (this.state.shouldRedirect) {
			return <Redirect to={`repo_detail/${this.props.repo.id}`}/>
		}

		return (
			<RepoContainer id={this.props.repo.id}>
				<Div onClick={ () => this.handleRepoClick(this.props.repo.full_name)}>
					<Icon />
					<div to={`repo_detail/${this.props.repo.id}`}>
						<span>{this.props.repo.name}</span>
					</div>
				</Div>
				<div>
					Projeto iniciado em: {new Date(this.props.repo.created_at).toLocaleDateString()}
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
		getRepos: username => dispatch(actions.getRepos(username))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserRepos);
