import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../userDetails/UserDetails';
import UserRepos from '../userRepos/UserRepos';

import * as actions from '../../store/actions/actionsIndex';

import {
	Header,
	Button,
	Input,
	LoadingIcon,
	InputSearchCOntainer
} from './UserSearch.styles';

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
		console.log(this.props.repos);
		return (
			<Fragment>
				<Header>
					<InputSearchCOntainer>
						{this.props.isLoading ? <LoadingIcon /> : null}
						<Input type='text' onChange={this.handleInput} />
					</InputSearchCOntainer>
					<Button onClick={this.handleUserSearch}>Pesquisar</Button>
				</Header>
				<UserDetails />
				{this.props.repos
					? this.props.repos.data.map(repo => (
							<UserRepos key={repo.id} repo={repo} />
					  ))
					: null
				}
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
