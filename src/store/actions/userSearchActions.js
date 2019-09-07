import axios from 'axios';
import {
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAILURE,
	GET_USER_REPOS_REQUEST,
	GET_USER_REPOS_SUCCESS,
	GET_USER_REPOS_FAILURE,
	RESET_USER
} from './actionTypes';

import { _GIT_URL } from '../../utils/baseURL';

export const getUser = username => {
	return async dispatch => {
		dispatch({
			type: GET_USER_REQUEST
		});

		await axios
			.get(`${_GIT_URL}${username}`)
			.then(response => {
				dispatch({
					type: GET_USER_SUCCESS,
					user: response
				});
			})
			.catch(error => {
				dispatch({
					type: GET_USER_FAILURE,
					userError: error
				});
			});
	};
};

export const getRepos = username => {
	return async dispatch => {
		dispatch({
			type: GET_USER_REPOS_REQUEST
		});

		await axios
			.get(`${_GIT_URL}${username}/repos`)
			.then(response => {
				dispatch({
					type: GET_USER_REPOS_SUCCESS,
					repos: response
				});
			})
			.catch(error => {
				dispatch({
					type: GET_USER_REPOS_FAILURE,
					reposError: error
				});
			});
	};
};

export const resetUser = () => {
	return dispatch => {
		dispatch({
			type: RESET_USER,
			user: {}
		});
	};
};
