import axios from 'axios';

import {
	GET_REPOS_FAILURE,
	GET_REPOS_REQUEST,
	GET_REPOS_SUCCESS,
	RESET_REPOS,
	SET_SORTED_REPOS,
	GET_REPO_FAILURE,
	GET_REPO_REQUEST,
	GET_REPO_SUCCESS,
	RESET_REPO
} from './actionTypes';

import { _GIT_USER_URL, _GIT_REPOS_URL } from '../../utils/baseURL';

export const getRepos = username => {
	return async dispatch => {
		dispatch({
			type: GET_REPOS_REQUEST
		});

		await axios
			.get(`${_GIT_USER_URL}${username}/repos`)
			.then(response => {
				const repos = response.data.sort(
					(a, b) => b.stargazers_count - a.stargazers_count
				);
				let count = 0;
				const popRepos = repos.filter(repo => {
					return repo.stargazers_count > 0 && count++ < 4
				});
				dispatch({
					type: GET_REPOS_SUCCESS,
					repos,
					popRepos
				});
			})
			.catch(error => {
				dispatch({
					type: GET_REPOS_FAILURE,
					error
				});
			});
	};
};

export const resetRepos = () => {
	return dispatch => {
		dispatch({
			type: RESET_REPOS,
			repos: null
		});
	};
};

export const getRepo = repoFullName => {
	return async dispatch => {
		dispatch({
			type: GET_REPO_REQUEST
		});

		await axios
			.get(`${_GIT_REPOS_URL}${repoFullName}`)
			.then(response => {
				dispatch({
					type: GET_REPO_SUCCESS,
					repo: response.data
				});
			})
			.catch(error => {
				dispatch({
					type: GET_REPO_FAILURE,
					error
				});
			});
	};
};

export const resetRepo = () => {
	return dispatch => {
		dispatch({
			type: RESET_REPO,
			repo: null
		});
	};
};

export const setSortedRepos = repos => {
	return dispatch => {
		dispatch({
			type: SET_SORTED_REPOS,
			repos
		});
	};
};
