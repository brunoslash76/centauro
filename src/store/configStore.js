import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import userSearchReducer from './reducers/userSearchReducer';
import loadingReducer from './reducers/loadingReducer';
import reposReducer from './reducers/reposReducer';

export default function configureStore(history, initialState) {
  const reducers = {
    userSearchReducer,
    loadingReducer,
  };

  const middleware = [thunk, routerMiddleware(history)];

  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === "development";
  if (
    isDevelopment &&
    typeof window !== "undefined" &&
    window.devToolsExtension
  ) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history)
  });

  const combineReducersApp = (state, action) => {
    return rootReducer(state, action);
  };

  return createStore(
    combineReducersApp,
    initialState,
    compose(
      applyMiddleware(...middleware, routerMiddleware(history)),
      ...enhancers
    )
  );
}
