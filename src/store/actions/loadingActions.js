import {
    LOADING_TRUE,
    LOADING_FALSE,
} from './actionTypes';

export const setLoading = (isLoading) => {
    return dispatch => {
        dispatch({
            type: isLoading ? LOADING_TRUE : LOADING_FALSE,
            loading: isLoading
        });
    }
}