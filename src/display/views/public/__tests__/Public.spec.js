// #region imports
import React from 'react';
import { shallowWithState } from '~/testhelpers/helpers.unit';
import Public from '../Public';
// #endregion imports

// #region mocks
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getPublicThreads: () => [{}, {}, {}],
	getIsLoadingIconVisible: () => false
}));
jest.mock('../../../../infrastructure/constants/legacyPublicValues', () => ({
	buildLegacyView: () => ({
		name: 'Legacy View',
		id: '54321'
	}),
	legacyPublicSlugs: ['invalidslug']
}));
jest.mock('../PublicThreadTable', () => 'PublicThreadTable');
jest.mock('../PublicHeader', () => 'PublicHeader');
jest.mock('../PublicThreadFilterSelect', () => 'PublicThreadFilterSelect');
jest.mock('../_columns', () => () => [{}, {}, {}, {}]);
jest.mock('../../../shared/loading/LoadingIndicator', () => 'LoadingIndicator');
jest.mock('../../../../utility', () => ({
	getQuery: () => ({})
}));
// #endregion mocks

const createTestProps = (propOverrides) => ({
	fetchLegacyPublicThreads: jest.fn(),
	slug: 'my-slug',
	username: 'test-user',
	fetchPublicThreads: jest.fn(),
	setPublicThreadFilter: jest.fn(),
	...propOverrides
});

const createTestState = (stateOverrides) => ({
	publicThreads: {
		threads: [],
		view: {
			name: 'Test View',
			id: '12345'
		}
	},
	publicThreadFilter: 'ALL',
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = <Public {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should fetch public threads if slug is valid', () => {
			const fetchPublicThreads = jest.fn();
			const props = createTestProps({
				fetchPublicThreads
			});
			const state = createTestState();
			const jsx = <Public {...props} />;
			shallowWithState(jsx, state).dive();
			expect(fetchPublicThreads).toHaveBeenCalledTimes(1);
			expect(fetchPublicThreads).toHaveBeenLastCalledWith('my-slug', 'test-user');
		});
		it('should fetch public threads if slug is legacy and no username', () => {
			const fetchLegacyPublicThreads = jest.fn();
			const props = createTestProps({
				fetchLegacyPublicThreads,
				slug: 'invalidslug',
				username: null
			});
			const state = createTestState();
			const jsx = <Public {...props} />;
			shallowWithState(jsx, state).dive();
			expect(fetchLegacyPublicThreads).toHaveBeenCalledTimes(1);
			expect(fetchLegacyPublicThreads).toHaveBeenLastCalledWith({
				name: 'Legacy View',
				id: '54321'
			});
		});
	});
});
