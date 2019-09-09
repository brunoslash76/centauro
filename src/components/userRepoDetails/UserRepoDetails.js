import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Section, Icon, Div, Header, Anchor } from './UserRepoDetails.style';
import RepoStar from '../repoStars/RepoStars';

class UserRepoDetails extends Component {
	render() {
		const { repo } = this.props;
		if (!repo) {
			return <Redirect to='/' />;
		}
		return (
			<Section>
				<Header>
					<Div>
						<Icon />
						<div>{repo.name.toUpperCase()}</div>
					</Div>
					<RepoStar
						stargazers_count={repo.stargazers_count}
						style={{ marginLeft: '10px' }}
					/>
				</Header>
				<Div>Descrição: {repo.description}</Div>

				<Div>Liguagem principal: {repo.language}</Div>
				<a href={repo.html_url} target='_blank'>
					Veja no github
				</a>
				<Anchor>
					<NavLink to='/'>Voltar</NavLink>
				</Anchor>
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
