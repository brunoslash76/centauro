import { LOADING_FALSE, LOADING_TRUE } from '../actions/actionTypes';

const LOADING_INIT_STATE = {
	loading: false
};

const setLoading = (state, action) => {
	return {
		...state,
		loading: action.loading
	};
};


const reducer = (state = LOADING_INIT_STATE, action) => {
    switch(action.type) {
        case LOADING_FALSE:
        case LOADING_TRUE:
            return setLoading(state, action);
        default: 
            return state;
    }
}

export default reducer;