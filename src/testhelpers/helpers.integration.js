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

const initMockDateNow = () => {
	const DATE_TO_USE = new Date('June 5, 1989 03:24:00');
	const MockDate = Date;
	global.Date = jest.fn(() => DATE_TO_USE);
	global.Date.UTC = MockDate.UTC;
	global.Date.parse = MockDate.parse;
	global.Date.now = MockDate.now;
	return DATE_TO_USE;
};

const initExportWindowValues = () => {
	Object.defineProperty(global.navigator, 'msSaveBlob', {
		value: undefined,
		writable: true
	});
	Object.defineProperty(global.navigator, 'webkitSaveBlob', {
		value: undefined,
		writable: true
	});
	Object.defineProperty(global.navigator, 'mozSaveBlob', {
		value: undefined,
		writable: true
	});
	Object.defineProperty(global.navigator, 'saveBlob', {
		value: undefined,
		writable: true
	});
	global.window.URL = null;
	global.window.webkitURL = null;
	global.window.mozURL = null;
	global.window.msURL = null;
	global.document.createElement = jest.fn();
};

// eslint-disable-next-line import/prefer-default-export
export { renderWrapper as render, initMockDateNow, initExportWindowValues };
