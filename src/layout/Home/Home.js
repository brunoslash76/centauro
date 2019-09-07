import React, { Component } from 'react';
import UserSearch from '../../components/userSearch/UserSearch';
import {Main} from './Home.styles';
export default class Home extends Component {

    render() {
        return (
            <Main>
                <UserSearch />
            </Main>
        );
    }
}