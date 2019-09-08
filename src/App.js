import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './layout/Home/Home';
import './index.css';
import UserRepoDetails from './components/userRepoDetails/UserRepoDetails';

class App extends Component {
	render() {
		return (
			<Switch>
					<Route 
						path='/'
						exact
						name='Home'
						component={Home}
					/>
					<Route
						path='/repo_detail/:id'
						name='UserReposDetails'
						component={UserRepoDetails}
					/>
			</Switch>
		);
	}
}

export default withRouter(App);
