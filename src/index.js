import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import configureStore from './store/configStore';
import configureAxios from './utils/configureAxios';

import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

configureAxios(history);

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Fragment>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>
	</Fragment>,
	rootElement
);

serviceWorker.unregister();
