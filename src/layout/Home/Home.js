import React, { Component } from 'react';

import UserSearch from '../../components/userSearch/UserSearch';
import { Main } from './Home.styles';
import UserDetails from '../../components/userDetails/UserDetails';

export default class Home extends Component {
	render() {
		return (
			<Main>
				<UserSearch />
				<UserDetails />
			</Main>
		);
	}
}
