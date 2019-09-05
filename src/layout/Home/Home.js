import React, { Component } from 'react';
import UserSearch from '../../components/user-search/UserSearch';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <UserSearch />
                Home
            </div>
        );
    }
}