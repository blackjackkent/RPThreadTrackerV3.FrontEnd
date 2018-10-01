import { when } from 'jest-when';
import * as common from '../../common';
import * as filters from '../../../constants/filters';
import getRecentActivity from '../getRecentActivity';

jest.mock('../../common', () => ({
	buildThreadDataByPredicate: jest.fn()
}));
jest.mock('../../../constants/filters', () => ({
	MY_TURN: jest.fn()
}));

const getThreads = () => [
	{ threadId: 1 },
	{ threadId: 2 },
	{ threadId: 3 },
	{ threadId: 4 },
	{ threadId: 5 },
	{ threadId: 6 },
	{ threadId: 7 }
];
const getStatuses = () => [
	{ lastPostDate: new Date(2018, 3, 3) },
	{ lastPostDate: new Date(2018, 3, 2) },
	{ lastPostDate: new Date(2018, 3, 5) },
	{ lastPostDate: new Date(2018, 3, 7) },
	{ lastPostDate: new Date(2018, 3, 1) },
	{ lastPostDate: new Date(2018, 3, 6) },
	{ lastPostDate: new Date(2018, 3, 4) }
];

const getAggregateOutput = () => [
	{ thread: { threadId: 1 }, status: { lastPostDate: new Date(2018, 3, 3) } },
	{ thread: { threadId: 2 }, status: { lastPostDate: new Date(2018, 3, 2) } },
	{ thread: { threadId: 3 }, status: { lastPostDate: new Date(2018, 3, 5) } },
	{ thread: { threadId: 4 }, status: { lastPostDate: new Date(2018, 3, 7) } },
	{ thread: { threadId: 5 }, status: { lastPostDate: new Date(2018, 3, 1) } },
	{ thread: { threadId: 6 }, status: { lastPostDate: new Date(2018, 3, 6) } },
	{ thread: { threadId: 7 }, status: { lastPostDate: new Date(2018, 3, 4) } }
];

describe('behavior', () => {
	it('should return empty array when no threads on state', () => {
		const state = {
			activeThreads: [],
			activeThreadsStatus: [{}, {}, {}]
		};
		const result = getRecentActivity(state);
		expect(result).toEqual([]);
	});
	it('should return empty array when no statuses on state', () => {
		const state = {
			activeThreads: [{}, {}, {}],
			activeThreadsStatus: []
		};
		const result = getRecentActivity(state);
		expect(result).toEqual([]);
	});
	it('should return top five items by date', () => {
		when(common.buildThreadDataByPredicate)
			.calledWith(
				expect.arrayContaining(getThreads()),
				expect.arrayContaining(getStatuses()),
				filters.MY_TURN
			)
			.mockReturnValue(getAggregateOutput());
		const state = {
			activeThreads: getThreads(),
			activeThreadsStatus: getStatuses()
		};
		const result = getRecentActivity(state);
		expect(result).toHaveLength(5);
		expect(result[0].thread.threadId).toBe(4);
		expect(result[1].thread.threadId).toBe(6);
		expect(result[2].thread.threadId).toBe(3);
		expect(result[3].thread.threadId).toBe(7);
		expect(result[4].thread.threadId).toBe(1);
	});
});
