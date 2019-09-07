import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class UserRepos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>User Repos</div>
        );
    }
}

export default connect()(UserRepos)