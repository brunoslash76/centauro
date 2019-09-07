import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import UserSearch from './components/userSearch/UserSearch';
import Home from './layout/Home/Home';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Switch>
					<Home>
						<Route
							path='/user_search'
							name='user_search'
							component={UserSearch}
						/>
					</Home>
				</Switch>
			</Fragment>
		);
	}
}

export default App;
