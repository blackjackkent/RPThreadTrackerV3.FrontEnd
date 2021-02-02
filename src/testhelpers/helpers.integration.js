import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const renderWrapper = (children) => {
	const queryClient = new QueryClient();
	const wrapper = <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
	return render(wrapper, { wrapper: MemoryRouter });
};

export { renderWrapper as render };
