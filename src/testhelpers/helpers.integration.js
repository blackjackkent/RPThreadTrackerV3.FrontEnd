import React from 'react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWrapper = (children) => {
	setLogger({
		log: () => {},
		warn: () => {},
		error: () => {}
	});
	const queryClient = new QueryClient();
	const history = createMemoryHistory();
	const wrapper = (
		<Router initialEntries={['/']} history={history}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Router>
	);
	return { element: render(wrapper), history };
};

export { renderWrapper as render };
