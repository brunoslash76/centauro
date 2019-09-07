import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actionsIndex';

import { 
	Section,
	UserInfo,
} from './UserDetails.styles';

class UserDetails extends Component {
	resetUser() {
		this.props.resetUser();
	}

	render() {
		console.log(this.props.user);
		if (this.props.userError) {
			return <div>Usuárion não encontrado</div>;
		}

		if (!this.props.user) {
			return <div>Busque um usuário</div>;
		}
		const user = this.props.user.data;
		return (
			<Section>
				<div className='user-avatar'>
					<img
						src={user.avatar_url}
						alt={`${user.name} avartar`}
						height='150px;'
					/>
				</div>
				<UserInfo>
					<div>
						<p>Name: {user.name}</p>
						<a
							href={user.html_url}
							target='_blank'
							rel='noopener noreferrer'
						>
							Veja no Github
						</a>
					</div>
					<div>
						<p>Followers: {user.followers}</p>
						<p>Following: {user.following}</p>
					</div>
				</UserInfo>
			</Section>
		);
	}
}

const mapStateToProps = state => {
	return {
		userError: state.userSearchReducer.userError,
		user: state.userSearchReducer.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		resetUser: () => dispatch(actions.resetUser())
	};
};

export default connect(mapStateToProps)(UserDetails);
