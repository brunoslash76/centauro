import {
    LOADING_TRUE,
    LOADING_FALSE,
} from './actionTypes';

import _GIT_URL from '../../utils/baseURL.js'

export const setLoading = (isLoading) => {
    return dispatch => {
        dispatch({
            type: isLoading ? LOADING_TRUE : LOADING_FALSE,
            loading: isLoading
        });
    }
}