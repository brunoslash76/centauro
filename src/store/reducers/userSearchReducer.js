import {
	GET_USER_SUCCESS,
	GET_USER_FAILURE,
	RESET_USER
} from '../actions/actionTypes';

const USER_INIT_STATE = {
	user: null,
	repos: null,
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
		case GET_USER_SUCCESS:
			return setUser(state, action);
		case RESET_USER:
			return resetUser(state, action);
		default:
			return state;
	}
};

export default reducer;
