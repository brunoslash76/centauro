import {
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAILURE
} from '../actions/actionTypes';

const USER_INIT_STATE = {
	user: {}
};

const setUser = (state, action) => {
	return {
		...state,
		user: action.user
	};
};

//

const reducer = (state = USER_INIT_STATE, action) => {
	switch (action.type) {
		case GET_USER_FAILURE:
		case GET_USER_SUCCESS:
            return setUser(state, action);
        default: 
            return USER_INIT_STATE;
	}
};

export default reducer;
