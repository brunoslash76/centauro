import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class UserRepoDetails extends Component {

    componentDidMount() {
        const {match: {params}} = this.props;
        console.log(params);
    }

    render () {
        return(
            <div>Worked</div>
        )
    }
}

export default UserRepoDetails;