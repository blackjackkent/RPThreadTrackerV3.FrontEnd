import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import GoogleAnalytics from 'react-ga';

import getStore from './infrastructure/getStore';
import network from './infrastructure/network';
import icons from './infrastructure/icons';
import analytics from './infrastructure/analytics';
import App from './App';

const store = getStore();
network.setupInterceptors(store);
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
