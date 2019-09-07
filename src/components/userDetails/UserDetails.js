import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actionsIndex'

class UserDetails extends Component {

	componentDidMount() {
		console.log(this.props);
	}

	resetUser() {
		this.props.resetUser();
	}

	render() {

		if (this.props.userError) {
			return (
				<div>Usuárion não encontrado</div>
			);
		}

		if (!this.props.user) {
			return (
				<div>Busque um usuário</div>
			);
		}
		const { user } = this.props;
		console.log(user);
		return (
			<section>
				<div className='user-avatar'>
					<img src={user.avatar_url} />
				</div>
				<div className='user-info'>
					<div>
						<p>Name: {user.name}</p>
						<a href={user.html_url} target='_blank'>
							Veja no Github
						</a>
					</div>
					<div>
						<p>Followers: {user.followers}</p>
						<p>Following: {user.following}</p>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		userError: state.userSearchReducer.userError
	}
}

const mapDispatchToProps = dispatch => {
	return {
		resetUser: () => dispatch(actions.resetUser()),
	}
}

export default connect(mapStateToProps)(UserDetails);
