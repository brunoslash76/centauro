import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


class UserRepos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldRedirect: false,
			repoFullName: null
		};
	}

	handleRepoClick(repoFullName) {
		this.setState({
			shouldRedirect: true,
			repoFullName
		});
	}

	render() {
        console.log(this.props)
		if (this.state.shouldRedirect) {
			return <Redirect to={this.state.repoFullName} />;
		}

        return (
            <Link to={`repo_detail/${this.props.repo.full_name}`}>
                <span>{this.props.repo.name}</span>
            </Link>
        );
	}
}

export default connect()(UserRepos);
