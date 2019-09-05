import axios from 'axios';
import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
} from './actionTypes';

const _GIT_URL = 'https://api.github.com/users/'

export const getUser = (username) => {
    return dispatch => {
        dispatch({
            type: GET_USER_REQUEST,
        });

        axios
            .get(`${_GIT_URL}${username}`)
            .then(response => {
                console.log(response)
                dispatch({
                    type: GET_USER_SUCCESS,
                    user: response
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_USER_FAILURE,
                    error: error
                });
            });
    }
}