import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRepoDetails extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const {match: {params}} = this.props
    }

    render () {
        return(
            <div></div>
        )
    }
}
