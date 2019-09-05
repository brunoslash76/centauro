import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actionsIndex';

class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleUserSearch = this.handleUserSearch.bind(this);
    }

    componentDidMount() {
        console.log(this.props)
    }

    handleInput(e) {
        e.persist();
        this.setState(
            {
                ...this.state,
                username: e.target.value,
            },
            () => console.log(this.state.username),
        );

    }

    async handleUserSearch() {
        if (this.state.username === '' || this.state.username === null) {
            return;
        } else {
            await this.props.getUser(this.state.username);
            console.log(this.props.user)

        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInput} />
                <button onClick={this.handleUserSearch}>Pesquisar</button>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        user: state.userSearchReducer.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUser: username => dispatch(actions.getUser(username)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);