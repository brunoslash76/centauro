import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Star,
	EmptyStar,
	StarContainer,
	CountContainer,
	StarCountContainer
} from './RepoStars.styles';

class RepoStar extends Component {
	render() {
		const { stargazers_count } = this.props;
		return (
			<StarCountContainer>
				<StarContainer>
					{stargazers_count > 0 ? <Star /> : <EmptyStar />}
				</StarContainer>
				<CountContainer>{stargazers_count}</CountContainer>
			</StarCountContainer>
		);
	}
}

RepoStar.protoTypes = {
	stargazers_count: PropTypes.number.isRequired
};

export default RepoStar;
