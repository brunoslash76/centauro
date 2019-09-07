import {
	// GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAILURE,
	GET_USER_REPOS_FAILURE,
	GET_USER_REPOS_SUCCESS,
	RESET_USER
} from '../actions/actionTypes';

const USER_INIT_STATE = {
	user: {},
	repos: {},
	userError: null,
	reposError: null,
};

const setUser = (state, action) => {
	return {
		...state,
		user: action.user
	};
};

const setUserError = (state, action) => {
	return {
		...state,
		userError: action.error
	};
};
const setReposError = (state, action) => {
	return {
		...state,
		reposError: action.error
	};
};

const setRepos = (state, action) => {
	return {
		...state,
		repos: action.repos
	};
};

const resetUser = (state, action) => {
	return {
		...state,
		user: action.user
	};
}

//

const reducer = (state = USER_INIT_STATE, action) => {
	switch (action.type) {
		case GET_USER_FAILURE:
			return setUserError(state, action);
		case GET_USER_REPOS_FAILURE:
			return setReposError(state, action);
		case GET_USER_SUCCESS:
			return setUser(state, action);
		case GET_USER_REPOS_SUCCESS:
			return setRepos(state, action);
		case RESET_USER:
			return resetUser(state, action);
		default:
			return state;
	}
};

export default reducer;
