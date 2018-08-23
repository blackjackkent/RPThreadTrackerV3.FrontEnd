// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../../../config/tests/helpers.unit';
import RecentActivityCard from '../RecentActivityCard';
// #endregion imports

// #region mocks
jest.mock('../RecentActivityRow', () => 'RecentActivityRow');
jest.mock('../../NoThreadsMessage', () => 'NoThreadsMessage');
jest.mock('../../NoCharactersMessage', () => 'NoCharactersMessage');
jest.mock('../../NoActiveCharactersMessage', () => 'NoActiveCharactersMessage');
jest.mock('../../NoRecentActivityMessage', () => 'NoRecentActivityMessage');
jest.mock('../../../../../shared/LoadingIndicator', () => 'LoadingIndicator');
// #endregion mocks

const createTestProps = propOverrides => ({
	allThreads: [],
	archiveThread: jest.fn(),
	characters: [],
	loadingInProgress: false,
	markThreadQueued: jest.fn(),
	openUntrackThreadModal: jest.fn(),
	recentActivityThreads: [],
	...propOverrides
});
const createTestPropsLoading = () => createTestProps({ loadingInProgress: true });
const createTestPropsNoCharacters = () => createTestProps({});
const createTestPropsNoActiveCharacters = () => createTestProps({
	characters: [{ isOnHiatus: true }, { isOnHiatus: true }]
});
const createTestPropsNoThreads = () => createTestProps({ characters: [{}, {}] });
const createTestPropsNoRecentActivity = () => createTestProps({
	characters: [{}, {}], allThreads: [{}, {}, {}]
});
const createTestPropsRecentActivity = () => createTestProps({
	characters: [{}, {}],
	allThreads: [{}, {}, {}],
	recentActivityThreads: [{ thread: { threadId: 1, userTitle: 'Recent 1' } }, { thread: { threadId: 2, userTitle: 'Recent 2' } }]
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot when threads are loading', () => {
			const element = shallow(<RecentActivityCard {...createTestPropsLoading()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when user has no characters', () => {
			const element = shallow(<RecentActivityCard {...createTestPropsNoCharacters()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when user has no active characters', () => {
			const element = shallow(<RecentActivityCard {...createTestPropsNoActiveCharacters()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when user has no threads', () => {
			const element = shallow(<RecentActivityCard {...createTestPropsNoThreads()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when user has no recent activity', () => {
			const element = shallow(<RecentActivityCard {...createTestPropsNoRecentActivity()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when user has recent activity', () => {
			const element = shallow(<RecentActivityCard {...createTestPropsRecentActivity()} />);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should render item for each thread', () => {
			const element = shallow(<RecentActivityCard {...createTestPropsRecentActivity()} />);
			const rows = getSpecWrapper(element, 'recent-activity-card-row');
			expect(rows).toHaveLength(2);
		});
	});
});
