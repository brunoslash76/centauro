import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Section, Icon, Div } from './UserRepoDetails.style';

class UserRepoDetails extends Component {
	render() {
		const { repo } = this.props;
		if (!repo) {
			return <Redirect to='/' />;
		}
		return (
			<Section>
				<Div>
					<Icon />
					<div>{repo.name}</div>
				</Div>
				<div>{repo.description}</div>
				<div>{repo.stargazers_count}</div>
				<div>{repo.language}</div>
				<a href={repo.html_url} target="_blank">Veja no github</a>
				<NavLink to='/'>Voltar</NavLink>
			</Section>
		);
	}
}

const mapStateToProps = state => {
	return {
		repo: state.reposReducer.repo
	};
};

export default connect(mapStateToProps)(UserRepoDetails);
