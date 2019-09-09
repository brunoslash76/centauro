import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Section, Icon } from './UserRepoDetails.style';

class UserRepoDetails extends Component {
	render() {
        const { repo } = this.props;
        if (!repo) {
            return <Redirect to='/' />;
        }
		return (
			<Section>
				<Icon />
				<div>{repo.name}</div>
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
