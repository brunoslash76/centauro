import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserRepos extends Component {
    render() {
        return (
            <div>User Repos</div>
        );
    }
}

export default connect()(UserRepos)