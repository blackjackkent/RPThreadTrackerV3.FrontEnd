import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import getStore from './infrastructure/getStore';
import App from './App';

const store = getStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
