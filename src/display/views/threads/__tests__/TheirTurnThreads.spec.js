// #region imports
import React from 'react';
import { shallowWithState } from '~/testhelpers/helpers.unit';
import TheirTurnThreads from '../TheirTurnThreads';
// #endregion imports

// #region mocks
jest.mock('../components/_columns', () => (characters, partners, lastPosters) =>
	`${characters.length} ${partners.length} ${lastPosters.length}`
);
jest.mock('../components/_getTdProps', () => (fn1, fn2, fn3, fn4) =>
	`${fn1.name} ${fn2.name} ${fn3.name} ${fn4.name}`
);
jest.mock('../components/ThreadTable', () => 'ThreadTable');
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getTheirTurnFilteredThreads: () => [{}, {}, {}, {}, {}, {}, {}],
	getActiveThreadCharacters: () => [{}, {}],
	getActiveThreadPartners: () => ['partner1', 'partner2'],
	getActiveThreadLastPosters: () => ['lastposter1', 'lastposter2'],
	getActiveThreadTags: () => [{}, {}, {}]
}));
// #endregion mocks

const createTestProps = (propOverrides) => ({
	fetchActiveThreads: jest.fn(),
	openUntrackThreadModal: jest.fn(),
	openEditThreadModal: jest.fn(),
	toggleThreadIsArchived: jest.fn(),
	toggleThreadIsMarkedQueued: jest.fn(),
	...propOverrides
});

const createTestState = (stateOverrides) => ({
	activeThreads: [{}, {}, {}, {}, {}, {}, {}, {}],
	ui: {
		useLightTheme: false
	},
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = <TheirTurnThreads {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should retrieve threads when threads are not loaded', () => {
			const fetchActiveThreads = jest.fn();
			const props = createTestProps({
				fetchActiveThreads
			});
			const state = createTestState({
				activeThreads: []
			});
			const jsx = <TheirTurnThreads {...props} />;
			shallowWithState(jsx, state).dive();
			expect(fetchActiveThreads).toHaveBeenCalledTimes(1);
		});
		it('should not retrieve threads when threads are loaded', () => {
			const fetchActiveThreads = jest.fn();
			const props = createTestProps({
				fetchActiveThreads
			});
			const state = createTestState();
			const jsx = <TheirTurnThreads {...props} />;
			shallowWithState(jsx, state).dive();
			expect(fetchActiveThreads).toHaveBeenCalledTimes(0);
		});
	});
});
