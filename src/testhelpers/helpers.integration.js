import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWrapper = (children) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 0,
				retryDelay: 1
			},
			mutations: {
				retry: 0,
				retryDelay: 1
			}
		}
	});
	const history = createMemoryHistory();
	const wrapper = (
		<Router initialEntries={['/']} history={history}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Router>
	);
	return { element: render(wrapper), history };
};

// eslint-disable-next-line import/prefer-default-export
export { renderWrapper as render };
