import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../userDetails/UserDetails';
import UserRepos from '../userRepos/UserRepos';

import * as actions from '../../store/actions/actionsIndex';

class UserSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleUserSearch = this.handleUserSearch.bind(this);
	}

	componentDidMount() {
		console.log(this.props);
	}

	handleInput(e) {
		e.persist();
		this.setState({
			...this.state,
			username: e.target.value
		});
	}

	async handleUserSearch() {
		if (this.state.username === '' || this.state.username === null) {
			return;
		} else {
			this.props.setLoading(true);
			await this.props.getUser(this.state.username);
			await this.props.getRepos(this.state.username);
			console.log(this.props);
			this.props.setLoading(false);
		}
	}

	render() {
		return (
			<Fragment>
				<div>
					{this.props.isLoading ? 'Loading' : ''}
					<input type='text' onChange={this.handleInput} />
					<button onClick={this.handleUserSearch}>Pesquisar</button>
				</div>
				<UserDetails />
				<UserRepos />
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.userSearchReducer.user,
		repos: state.userSearchReducer.repos,
		isLoading: state.loadingReducer.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getUser: username => dispatch(actions.getUser(username)),
		getRepos: username => dispatch(actions.getRepos(username)),
		setLoading: isLoading => dispatch(actions.setLoading(isLoading))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserSearch);
