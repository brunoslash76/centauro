import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import UserSearch from './components/userSearch/UserSearch';
import Home from './layout/Home/Home';
import './index.css';
import UserReposDetails from './components/userRepos/UserRepos';

class App extends Component {
	render() {
		return (
			<Switch>
				<Home>
					<Redirect push from='/' exact to='/user_search' />
					<Route
						path='/user_search'
						name='UserSearch'
						component={UserSearch}
					/>
					<Route
						path='/repo_detail/:id'
						name='UserReposDetails'
						component={UserReposDetails}
					/>
				</Home>
			</Switch>
		);
	}
}

export default withRouter(App);
