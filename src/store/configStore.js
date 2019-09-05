import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export default function configureStore(history, initialState) {
  const reducers = {
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

  //Reset redux state only if logoff was successfully
  const combineReducersApp = (state, action) => {
    if (action.type === "LOG_OUT_SUCCESS") {
      state = undefined;
    }
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
