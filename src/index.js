import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import getStore from './infrastructure/getStore';
import network from './infrastructure/network';
import icons from './infrastructure/icons';
import App from './App';

const store = getStore();
network.setupInterceptors();
icons.init();
const queryClient = new QueryClient();

render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<App />
		</Provider>
	</QueryClientProvider>,
	document.getElementById('root')
);
