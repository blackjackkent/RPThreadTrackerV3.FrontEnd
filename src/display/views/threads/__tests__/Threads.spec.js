
import React from 'react';
import { shallowWithState } from '../../../../../config/tests/helpers.unit';
import Threads from '../Threads';

const DATE_TO_USE = new Date('June 5, 1989 03:24:00');
const MockDate = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = MockDate.UTC;
global.Date.parse = MockDate.parse;
global.Date.now = MockDate.now;
jest.mock('../../../../infrastructure/selectors', () => ({
	getIsLoadingIconVisible: () => true
}));
jest.mock('../../../../infrastructure/actions', () => ({}));

const createTestProps = propOverrides => ({
	Renderable: () => 'Renderable',
	setFilteredTag: jest.fn(),
	bulkUpdateThreads: jest.fn(),
	fetchCharacters: jest.fn(),
	fetchActiveThreads: jest.fn(),
	fetchArchivedThreads: jest.fn(),
	upsertThread: jest.fn(),
	openBulkUntrackThreadsModal: jest.fn(),
	openUpsertThreadModal: jest.fn(),
	openUntrackThreadModal: jest.fn(),
	updateUserSettings: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	threadFilter: { tag: 'test' },
	characters: [{}, {}, {}],
	userSettings: { settingsId: '13579', threadTablePageSize: 50 },
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should retrieve characters when characters are not loaded', () => {
			const fetchCharacters = jest.fn();
			const props = createTestProps({ fetchCharacters });
			const state = createTestState({ characters: [] });
			const jsx = (<Threads {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchCharacters).toHaveBeenCalledTimes(1);
		});
		it('should not retrieve characters when characters are loaded', () => {
			const fetchCharacters = jest.fn();
			const props = createTestProps({ fetchCharacters });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchCharacters).toHaveBeenCalledTimes(0);
		});
	});
	describe('toggleThreadIsArchived', () => {
		it('should trigger thread update with isArchived toggled and null date queued', () => {
			const upsertThread = jest.fn();
			const props = createTestProps({ upsertThread });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().toggleThreadIsArchived({ threadId: '12345', userTitle: 'My Thread', dateMarkedQueued: '1989-06-05' });
			expect(upsertThread).toHaveBeenCalledTimes(1);
			expect(upsertThread).toHaveBeenLastCalledWith({
				threadId: '12345', userTitle: 'My Thread', dateMarkedQueued: null, isArchived: true
			});
		});
	});
	describe('toggleThreadIsMarkedQueued', () => {
		it('should trigger thread update with isArchived false and null date queued if date queued was set', () => {
			const upsertThread = jest.fn();
			const props = createTestProps({ upsertThread });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().toggleThreadIsMarkedQueued({
				threadId: '12345', userTitle: 'My Thread', isArchived: true, dateMarkedQueued: '1989-06-05'
			});
			expect(upsertThread).toHaveBeenCalledTimes(1);
			expect(upsertThread).toHaveBeenLastCalledWith({
				threadId: '12345', userTitle: 'My Thread', dateMarkedQueued: null, isArchived: false
			});
		});
		it('should trigger thread update with isArchived false and date queued set to now if date queued was not set', () => {
			const upsertThread = jest.fn();
			const props = createTestProps({ upsertThread });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().toggleThreadIsMarkedQueued({
				threadId: '12345', userTitle: 'My Thread'
			});
			expect(upsertThread).toHaveBeenCalledTimes(1);
			expect(upsertThread).toHaveBeenLastCalledWith({
				threadId: '12345', userTitle: 'My Thread', dateMarkedQueued: new Date(Date.now), isArchived: false
			});
		});
	});
	describe('bulkToggleThreadsAreMarkedQueued', () => {
		it('should trigger thread updates with isArchived false and null date queued if date queued was set', () => {
			const bulkUpdateThreads = jest.fn();
			const props = createTestProps({ bulkUpdateThreads });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().bulkToggleThreadsAreMarkedQueued([
				{
					threadId: '12345', userTitle: 'My Thread', isArchived: true, dateMarkedQueued: '1989-06-05'
				},
				{
					threadId: '23456', userTitle: 'My Thread 2', isArchived: false, dateMarkedQueued: '1989-07-05'
				}
			]);
			expect(bulkUpdateThreads).toHaveBeenCalledTimes(1);
			expect(bulkUpdateThreads).toHaveBeenLastCalledWith([
				{
					threadId: '12345', userTitle: 'My Thread', dateMarkedQueued: null, isArchived: false
				}, {
					threadId: '23456', userTitle: 'My Thread 2', dateMarkedQueued: null, isArchived: false
				}
			]);
		});
		it('should trigger thread updates with isArchived false and date queued set to now if date queued was not set', () => {
			const bulkUpdateThreads = jest.fn();
			const props = createTestProps({ bulkUpdateThreads });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().bulkToggleThreadsAreMarkedQueued([
				{
					threadId: '12345', userTitle: 'My Thread', isArchived: true
				},
				{
					threadId: '23456', userTitle: 'My Thread 2', isArchived: false
				}
			]);
			expect(bulkUpdateThreads).toHaveBeenCalledTimes(1);
			expect(bulkUpdateThreads).toHaveBeenLastCalledWith([
				{
					threadId: '12345', userTitle: 'My Thread', dateMarkedQueued: new Date(Date.now), isArchived: false
				}, {
					threadId: '23456', userTitle: 'My Thread 2', dateMarkedQueued: new Date(Date.now), isArchived: false
				}
			]);
		});
	});
	describe('bulkToggleThreadsAreArchived', () => {
		it('should trigger thread updates with isArchived toggled and null date queued', () => {
			const bulkUpdateThreads = jest.fn();
			const props = createTestProps({ bulkUpdateThreads });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().bulkToggleThreadsAreArchived([
				{
					threadId: '12345', userTitle: 'My Thread', isArchived: true, dateMarkedQueued: '2018-06-05'
				},
				{
					threadId: '23456', userTitle: 'My Thread 2', isArchived: false
				}
			]);
			expect(bulkUpdateThreads).toHaveBeenCalledTimes(1);
			expect(bulkUpdateThreads).toHaveBeenLastCalledWith([
				{
					threadId: '12345', userTitle: 'My Thread', dateMarkedQueued: null, isArchived: false
				}, {
					threadId: '23456', userTitle: 'My Thread 2', dateMarkedQueued: null, isArchived: true
				}
			]);
		});
	});
	describe('refreshThreads', () => {
		it('should trigger active thread refresh if page is not archive', () => {
			const fetchActiveThreads = jest.fn();
			const props = createTestProps({ fetchActiveThreads });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().refreshThreads(false);
			expect(fetchActiveThreads).toHaveBeenCalledTimes(1);
		});
		it('should trigger archived thread refresh if page is archive', () => {
			const fetchArchivedThreads = jest.fn();
			const props = createTestProps({ fetchArchivedThreads });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().refreshThreads(true);
			expect(fetchArchivedThreads).toHaveBeenCalledTimes(1);
		});
	});
	describe('updateThreadTablePageSize', () => {
		it('should update user settings with the passed value', () => {
			const updateUserSettings = jest.fn();
			const props = createTestProps({ updateUserSettings });
			const state = createTestState();
			const jsx = (<Threads {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().updateThreadTablePageSize(20);
			expect(updateUserSettings).toHaveBeenCalledTimes(1);
			expect(updateUserSettings).toHaveBeenLastCalledWith({ settingsId: '13579', threadTablePageSize: 20 });
		});
	});
});

