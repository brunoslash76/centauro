import axios from 'axios';
import {
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAILURE,
	
	RESET_USER
} from './actionTypes';

import { _GIT_URL as _GIT_USER_URL } from '../../utils/baseURL';

export const getUser = username => {
	return async dispatch => {
		dispatch({
			type: GET_USER_REQUEST
		});

		await axios
			.get(`${_GIT_USER_URL}${username}`)
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

export const resetUser = () => {
	return dispatch => {
		dispatch({
			type: RESET_USER,
			user: null,
		});
	};
};
