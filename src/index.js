import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import getStore from './infrastructure/getStore';
import network from './infrastructure/network';
import icons from './infrastructure/icons';
import App from './App';

const store = getStore();
network.setupInterceptors(store);
icons.init();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
