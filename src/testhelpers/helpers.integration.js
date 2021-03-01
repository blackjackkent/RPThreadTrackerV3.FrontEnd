import React from 'react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const renderWrapper = (children) => {
	setLogger({
		log: () => {},
		warn: () => {},
		error: () => {}
	});
	const queryClient = new QueryClient();
	queryClient.setDefaultOptions({
		queries: {
			cacheTime: 0
		},
		mutations: {
			cacheTime: 0
		}
	});
	const wrapper = <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
	return render(wrapper, { wrapper: MemoryRouter });
};

export { renderWrapper as render };
