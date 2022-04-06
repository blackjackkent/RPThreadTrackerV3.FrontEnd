import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import network from './infrastructure/network';
import icons from './infrastructure/icons';
import App from './App';

network.setupInterceptors();
icons.init();
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

render(
	<QueryClientProvider client={queryClient}>
		<ReactQueryDevtools initialIsOpen={false} />
		<App />
	</QueryClientProvider>,
	document.getElementById('root')
);
