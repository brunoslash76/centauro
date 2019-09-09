import {
	GET_REPOS_FAILURE,
    GET_REPOS_SUCCESS,
    GET_REPO_FAILURE,
    GET_REPO_SUCCESS,
} from '../actions/actionTypes';

const REPOS_INIT_STATE = {
    repos: null,
    repo: null,
    reposError: null,
    repoError: null,
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

const setRepo = (state, action) => {
    return {
        ...state,
        repo: action.repo,
    };
};

const setRepoError = (state, action) => {
    return {
        ...state,
        repoError: action.error,
    };
};

const reducer = (state = REPOS_INIT_STATE, action) => {
    switch(action.type) {
        case GET_REPOS_SUCCESS:
            return setRepos(state, action);
        case GET_REPOS_FAILURE: 
            return  setReposError(state, action);
        case GET_REPO_SUCCESS:
            return setRepo(state, action);
        case GET_REPO_FAILURE:
            return setRepoError(state, action)
        default: 
            return state;
    }
}

export default reducer;