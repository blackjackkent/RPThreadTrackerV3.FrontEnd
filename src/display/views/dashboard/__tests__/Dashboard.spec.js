// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState, initMockDateNow } from '~/testhelpers/helpers.unit';
import Dashboard from '../Dashboard';
// #endregion imports

// #region mocks
initMockDateNow();
jest.mock('../components/at-a-glance/AtAGlanceCard', () => 'AtAGlanceCard');
jest.mock('../components/recent-activity/RecentActivityCard', () => 'RecentActivityCard');
jest.mock('../components/your-characters/YourCharactersCard', () => 'YourCharactersCard');
jest.mock('../components/tracker-support/TrackerSupportCard', () => 'TrackerSupportCard');
jest.mock('../components/random-thread/RandomThreadCard', () => 'RandomThreadCard');
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getMyTurnThreads: () => [
		{
			threadId: 5,
			userTitle: 'My Turn 1'
		},
		{
			threadId: 6,
			userTitle: 'My Turn 2'
		}
	],
	getTheirTurnThreads: () => [
		{
			threadId: 7,
			userTitle: 'Their Turn 1'
		},
		{
			threadId: 8,
			userTitle: 'Their Turn 2'
		}
	],
	getQueuedThreads: () => [
		{
			threadId: 9,
			userTitle: 'Queued Turn 1'
		},
		{
			threadId: 10,
			userTitle: 'Queued Turn 2'
		}
	],
	getRecentActivity: () => [
		{
			threadId: 11,
			userTitle: 'Recent 1'
		},
		{
			threadId: 12,
			userTitle: 'Recent 2'
		}
	],
	getThreadCountsByCharacter: () => ({
		2: [
			{
				threadId: 13,
				userTitle: 'By Character 1'
			},
			{
				threadId: 14,
				userTitle: 'By Character 2'
			}
		]
	}),
	getIsLoadingIconVisible: () => true
}));
// #endregion mocks

const createTestProps = (propOverrides) => ({
	fetchActiveThreads: jest.fn(),
	fetchCharacters: jest.fn(),
	generateRandomThread: jest.fn(),
	openUntrackThreadModal: jest.fn(),
	updateUserSettings: jest.fn(),
	upsertThread: jest.fn(),
	...propOverrides
});

const createTestState = (stateOverrides) => ({
	characters: [
		{
			characterId: 1,
			characterName: 'Character A'
		},
		{
			characterId: 2,
			characterName: 'Character B'
		}
	],
	userSettings: {
		settingsId: 3
	},
	activeThreads: [
		{
			threadId: 1,
			userTitle: 'Active 1'
		},
		{
			threadId: 2,
			userTitle: 'Active 2'
		},
		{
			threadId: 3,
			userTitle: 'Active 3'
		}
	],
	randomThread: {
		threadId: 2,
		userTitle: 'My Random Thread'
	},
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should fetch characters when characters are not loaded', () => {
			const fetchCharacters = jest.fn();
			const props = createTestProps({
				fetchCharacters
			});
			const state = createTestState({
				characters: []
			});
			const jsx = <Dashboard {...props} />;
			shallowWithState(jsx, state).dive();
			expect(fetchCharacters).toHaveBeenCalledTimes(1);
		});
		it('should not fetch characters when characters are loaded', () => {
			const fetchCharacters = jest.fn();
			const props = createTestProps({
				fetchCharacters
			});
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			shallowWithState(jsx, state).dive();
			expect(fetchCharacters).toHaveBeenCalledTimes(0);
		});
		it('should fetch active threads when active threads are not loaded', () => {
			const fetchActiveThreads = jest.fn();
			const props = createTestProps({
				fetchActiveThreads
			});
			const state = createTestState({
				activeThreads: []
			});
			const jsx = <Dashboard {...props} />;
			shallowWithState(jsx, state).dive();
			expect(fetchActiveThreads).toHaveBeenCalledTimes(1);
		});
		it('should not fetch active threads when active threads are loaded', () => {
			const fetchActiveThreads = jest.fn();
			const props = createTestProps({
				fetchActiveThreads
			});
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			shallowWithState(jsx, state).dive();
			expect(fetchActiveThreads).toHaveBeenCalledTimes(0);
		});
	});
	describe('generateRandomThread', () => {
		it('should be triggered when child component prop is triggered', () => {
			const generateRandomThread = jest.fn();
			const props = createTestProps({
				generateRandomThread
			});
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			const element = shallowWithState(jsx, state).dive();
			const child = getSpecWrapper(element, 'dashboard-random-thread-card');
			child.props().generateRandomThread();
			expect(generateRandomThread).toHaveBeenCalledTimes(1);
		});
	});
	describe('openUntrackThreadModal', () => {
		it('should be triggered when child component prop is triggered', () => {
			const openUntrackThreadModal = jest.fn();
			const props = createTestProps({
				openUntrackThreadModal
			});
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			const element = shallowWithState(jsx, state).dive();
			const child = getSpecWrapper(element, 'dashboard-recent-activity-card');
			child.props().openUntrackThreadModal();
			expect(openUntrackThreadModal).toHaveBeenCalledTimes(1);
		});
	});
	describe('showDashboardThreadDistributionToggle', () => {
		it('should be triggered when child component prop is triggered', () => {
			const updateUserSettings = jest.fn();
			const props = createTestProps({
				updateUserSettings
			});
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			const element = shallowWithState(jsx, state).dive();
			const child = getSpecWrapper(element, 'dashboard-at-a-glance-card');
			child.props().showDashboardThreadDistributionToggle();
			expect(updateUserSettings).toHaveBeenCalledTimes(1);
		});
		it('should dispatch user settings update with thread distribution property reversed', () => {
			const updateUserSettings = jest.fn();
			const props = createTestProps({
				updateUserSettings
			});
			const state = createTestState({
				userSettings: {
					settingsId: 5,
					showDashboardThreadDistribution: false
				}
			});
			const jsx = <Dashboard {...props} />;
			const element = shallowWithState(jsx, state).dive();
			element.instance().showDashboardThreadDistributionToggle();
			expect(updateUserSettings).toHaveBeenCalledTimes(1);
			expect(updateUserSettings).toHaveBeenLastCalledWith({
				settingsId: 5,
				showDashboardThreadDistribution: true
			});
		});
	});
	describe('markThreadQueued', () => {
		it('should be triggered when child component prop is triggered', () => {
			const upsertThread = jest.fn();
			const props = createTestProps({
				upsertThread
			});
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			const element = shallowWithState(jsx, state).dive();
			const child = getSpecWrapper(element, 'dashboard-recent-activity-card');
			child.props().markThreadQueued();
			expect(upsertThread).toHaveBeenCalledTimes(1);
		});
		it('should dispatch thread update with queued date set', () => {
			const upsertThread = jest.fn();
			const props = createTestProps({
				upsertThread
			});
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			const element = shallowWithState(jsx, state).dive();
			element.instance().markThreadQueued({
				threadId: 1
			});
			expect(upsertThread).toHaveBeenCalledTimes(1);
			expect(upsertThread).toHaveBeenLastCalledWith({
				threadId: 1,
				dateMarkedQueued: new Date(global.Date.now())
			});
		});
	});
	describe('archiveThread', () => {
		it('should be triggered when child component prop is triggered', () => {
			const upsertThread = jest.fn();
			const props = createTestProps({
				upsertThread
			});
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			const element = shallowWithState(jsx, state).dive();
			const child = getSpecWrapper(element, 'dashboard-recent-activity-card');
			child.props().archiveThread({
				threadId: 1
			});
			expect(upsertThread).toHaveBeenCalledTimes(1);
		});
		it('should dispatch thread update with isArchived reversed', () => {
			const upsertThread = jest.fn();
			const props = createTestProps({
				upsertThread
			});
			const state = createTestState();
			const jsx = <Dashboard {...props} />;
			const element = shallowWithState(jsx, state).dive();
			element.instance().archiveThread({
				threadId: 1,
				isArchived: false
			});
			expect(upsertThread).toHaveBeenCalledTimes(1);
			expect(upsertThread).toHaveBeenLastCalledWith({
				threadId: 1,
				isArchived: true
			});
		});
	});
});
