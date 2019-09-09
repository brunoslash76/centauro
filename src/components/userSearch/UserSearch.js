import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actionsIndex';

import {
	Header,
	Button,
	Input,
	LoadingIcon,
	InputSearchCOntainer,
	ClearInoutBtn
} from './UserSearch.styles';

class UserSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			user: null,
			userRepos: null
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleUserSearch = this.handleUserSearch.bind(this);
	}

	handleInput(e) {
		e.persist();
		this.setState({
			...this.state,
			username: e.target.value
		});
	}

	async handleUserSearch(e) {
		e.persist();
		if (e.type === 'click' || e.key === 'Enter') {
			this.props.resetUser();
			if (this.state.username === '' || this.state.username === null) {
				return;
			} else {
				await this.setUserData();
				this.clearInput();
			}
		}
	}
	
	async setUserData() {
		this.props.setLoading(true);
		await this.props.getUser(this.state.username);
		await this.props.getRepos(this.state.username);
		this.props.setLoading(false);
	}

	clearInput = () => {
		this.setState({
			...this.state,
			username: ''
		});
	};

	render() {
		return (
			<Header>
				<InputSearchCOntainer>
					{this.props.isLoading ? <LoadingIcon /> : null}
					{this.state.username === '' ? null : (
						<ClearInoutBtn onClick={this.clearInput}>
							X
						</ClearInoutBtn>
					)}
					<Input
						type='text'
						onKeyUpCapture={this.handleUserSearch}
						onChange={this.handleInput}
						value={this.state.username}
					/>
				</InputSearchCOntainer>
				<Button onClick={this.handleUserSearch}>Pesquisar</Button>
			</Header>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.userSearchReducer.user,
		isLoading: state.loadingReducer.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getUser: username => dispatch(actions.getUser(username)),
		getRepos: username => dispatch(actions.getRepos(username)),
		resetUser: () => dispatch(actions.resetUser()),
		setLoading: isLoading => dispatch(actions.setLoading(isLoading))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserSearch);
