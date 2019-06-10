// #region imports
import React from 'react';
import { shallowWithState } from '../../../../../config/tests/helpers.unit';
import ArchivedThreads from '../ArchivedThreads';
// #endregion imports

// #region mocks
jest.mock('../components/_archiveColumns', () => (characters, partners, lastPosters) => `${characters.length} ${partners.length} ${lastPosters.length}`);
jest.mock('../components/_getTdProps', () => (fn1, fn2, fn3, fn4) => `${fn1.name} ${fn2.name} ${fn3.name} ${fn4.name}`);
jest.mock('../components/ThreadTable', () => 'ThreadTable');
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getArchivedFilteredThreads: () => [{}, {}, {}, {}, {}, {}, {}],
	getArchivedThreadCharacters: () => [{}, {}],
	getArchivedThreadPartners: () => ['partner1', 'partner2'],
	getArchivedThreadLastPosters: () => ['lastposter1', 'lastposter2'],
	getArchivedThreadTags: () => [{}, {}, {}]
}));
// #endregion mocks

const createTestProps = propOverrides => ({
	fetchArchivedThreads: jest.fn(),
	openUntrackThreadModal: jest.fn(),
	openEditThreadModal: jest.fn(),
	toggleThreadIsArchived: jest.fn(),
	toggleThreadIsMarkedQueued: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	archivedThreads: [{}, {}, {}, {}, {}, {}, {}, {}],
	ui: { useLightTheme: false },
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<ArchivedThreads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should retrieve threads when threads are not loaded', () => {
			const fetchArchivedThreads = jest.fn();
			const props = createTestProps({ fetchArchivedThreads });
			const state = createTestState({ archivedThreads: [] });
			const jsx = (<ArchivedThreads {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchArchivedThreads).toHaveBeenCalledTimes(1);
		});
		it('should not retrieve threads when threads are loaded', () => {
			const fetchArchivedThreads = jest.fn();
			const props = createTestProps({ fetchArchivedThreads });
			const state = createTestState();
			const jsx = (<ArchivedThreads {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchArchivedThreads).toHaveBeenCalledTimes(0);
		});
	});
});
