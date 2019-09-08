import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actionsIndex';

import {
	Section,
	UserInfo,
	UserReposContainer,
	LoadingIcon,
	Button
} from './UserDetails.styles';
import UserRepos from '../userRepos/UserRepos';

class UserDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userRepos: null,
			ascOrDesc: ''
		};
		this.handleSortClick = this.handleSortClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			...this.state,
			userRepos: this.props.userRepos
		});
	}

	handleSortClick(ascOrDesc) {
		this.sortRepos(ascOrDesc);
		this.setState({
			...this.state,
			ascOrDesc
		});
	}

	sortRepos(ascOrDesc) {
		let sorted;
		if (ascOrDesc === 'asc') {
			sorted = this.props.userRepos.sort(
				(a, b) =>
					new Date(a.created_at).getTime() -
					new Date(b.created_at).getTime()
			);
		} else if (ascOrDesc === 'desc') {
			sorted = this.props.userRepos.sort(
				(a, b) =>
					new Date(b.created_at).getTime() -
					new Date(a.created_at).getTime()
			);
		}
		this.props.setSortedRepos(sorted);
	}

	render() {
		if (!!this.props.userError) return <div>Usuárion não encontrado</div>;
		if (!this.props.user) return <div>Busque um usuário</div>;

		const user = this.props.user.data;
		return (
			<Fragment>
				<UserInfo>
					<Section>
						<div className='user-avatar'>
							<img
								src={user.avatar_url}
								alt={`${user.name} avartar`}
								height='150px;'
							/>
						</div>
						<UserInfo>
							<section>
								<div>
									Nome:{' '}
									<a
										href={user.html_url}
										target='_blank'
										rel='noopener noreferrer'
									>
										{user.name}
									</a>
								</div>

								<div>
									Email:{' '}
									{user.email
										? user.email
										: 'No email registered'}
								</div>
								<div>
									<div>Bio:</div>
									<div>{user.bio}</div>
								</div>
							</section>
							<div>
								<p>Followers: {user.followers}</p>
								<p>Following: {user.following}</p>
							</div>
						</UserInfo>
					</Section>
				</UserInfo>
				<UserReposContainer>
					{this.props.userRepos ? (
						<div>
							<Button onClick={() => this.handleSortClick('asc')}>
								Data Crescente
							</Button>
							<Button
								onClick={() => this.handleSortClick('desc')}
							>
								Data Descrescente
							</Button>
						</div>
					) : null}
					{this.props.userRepos
						? this.props.userRepos.map(repo => {
								return <UserRepos key={repo.id} repo={repo} />;
						  })
						: null}
				</UserReposContainer>
				{this.props.isLoading ? <LoadingIcon /> : null}
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		userError: state.userSearchReducer.userError,
		user: state.userSearchReducer.user,
		userRepos: state.reposReducer.repos,
		isLoading: state.loadingReducer.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		resetUser: () => dispatch(actions.resetUser()),
		setSortedRepos: repos => dispatch(actions.setSortedRepos(repos))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserDetails);
