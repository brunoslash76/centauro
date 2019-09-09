import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import reducer, {
	USER_INIT_STATE
} from '../../store/reducers/userSearchReducer';
import UserSearch from './UserSearch';

function renderWithRedux(
	ui,
	{ USER_INIT_STATE, store = createStore(reducer, USER_INIT_STATE) } = {}
) {
	return {
		...render(<Provider store={store}>{ui}</Provider>),
		store
	};
}

test('Render user Search Component', () => {
	const initState = { ...USER_INIT_STATE, user: {} };
	const { getByText } = renderWithRedux(<UserSearch />);
	expect(getByText('Pesquisar').textContent).not.toBe('');
});
