import React, { Component } from 'react';
import { Section, UserImg, InfoDiv, UserInfoContainer } from './UserInfo.styles';
import PropTypes from 'prop-types';

class UserInfo extends Component {
	render() {
        const { user } = this.props;
		return (
			<UserInfoContainer>
				<Section>
					<UserImg>
						<img
							src={user.avatar_url}
							alt={`${user.name} avartar`}
							height='150px;'
						/>
					</UserImg>
					<UserInfoContainer>
						<section>
							<InfoDiv>
								<strong>Nome: </strong>
								<a
									href={user.html_url}
									target='_blank'
									rel='noopener noreferrer'
								>
									{user.name}
								</a>
							</InfoDiv>

							<InfoDiv>
								<strong>Email: </strong>
								{user.email
									? user.email
									: 'No email registered'}
							</InfoDiv>
							<InfoDiv>
								<strong>Bio:</strong>
								<div>{user.bio}</div>
							</InfoDiv>
						</section>
						<div>
							<p>Followers: {user.followers}</p>
							<p>Following: {user.following}</p>
						</div>
					</UserInfoContainer>
				</Section>
			</UserInfoContainer>
		);
	}
}


UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserInfo;