import React, { Component, Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import UserSearch from './components/userSearch/UserSearch';
import Home from './layout/Home/Home';
import './index.css';
import UserReposDetails from './components/userRepos/UserRepos';

class App extends Component {
	render() {
		return (
			<Fragment>
				<BrowserRouter>
					<Switch>
						<Home>
							<Route
								path='/user_search'
								name='user_search'
								component={UserSearch}
							/>
							<Route
								path='/repo_detail/:full_name'
								name='repo_detail'
								component={UserReposDetails}
							/>
						</Home>
					</Switch>
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;
