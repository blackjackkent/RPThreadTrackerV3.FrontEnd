import { when } from 'jest-when';
import * as common from '../../../../common';
import * as filters from '../../../../../constants/filters';
import getAllActiveFilteredThreads from '../getAllActiveFilteredThreads';

jest.mock('../../../../common', () => ({
	filterThreadsByTag: jest.fn(),
	buildThreadDataByPredicate: jest.fn(),
	shouldProcessThreads: jest.fn()
}));
jest.mock('../../../../../constants/filters', () => ({
	ALL: jest.fn()
}));

const getThreads = () => [
	{ threadId: 1, threadTags: ['tag1', 'tag2'] },
	{ threadId: 2, threadTags: ['tag1', 'tag3'] },
	{ threadId: 3 },
	{ threadId: 4 },
	{ threadId: 5, threadtags: ['tag2', 'tag5'] },
	{ threadId: 6 },
	{ threadId: 7 }
];

const getStatuses = () => [
	{ postId: 1 },
	{ postId: 2 },
	{ postId: 3 },
	{ postId: 4 },
	{ postId: 5 },
	{ postId: 6 },
	{ postId: 7 }
];

const getAggregateOutput = () => [
	{ thread: { threadId: 1, threadTags: ['tag1', 'tag2'] }, status: { postId: 1 } },
	{ thread: { threadId: 2, threadTags: ['tag1', 'tag3'] }, status: { postId: 2 } },
	{ thread: { threadId: 3 }, status: { postId: 3 } },
	{ thread: { threadId: 4 }, status: { postId: 4 } },
	{ thread: { threadId: 5, threadtags: ['tag2', 'tag5'] }, status: { postId: 5 } },
	{ thread: { threadId: 6 }, status: { postId: 6 } },
	{ thread: { threadId: 7 }, status: { postId: 7 } }
];

const getFilteredOutput = () => [ // eslint-disable-line no-unused-vars
	{ thread: { threadId: 1, threadTags: ['tag1', 'tag2'] }, status: { postId: 1 } },
	{ thread: { threadId: 2, threadTags: ['tag1', 'tag3'] }, status: { postId: 2 } }
];

beforeEach(() => {
	jest.resetAllMocks();
});

describe('behavior', () => {
	it('should return empty array when shouldProcessThreads is false', () => {
		const state = {
			activeThreads: { threads: [] },
			activeThreadsStatus: [{}, {}, {}]
		};
		common.shouldProcessThreads.mockReturnValue(false);
		const result = getAllActiveFilteredThreads(state);
		expect(result).toEqual([]);
	});
	it('should return all items when no threadFilter on state', () => {
		common.shouldProcessThreads.mockReturnValue(true);
		when(common.buildThreadDataByPredicate)
			.calledWith(
				expect.arrayContaining(getThreads()),
				expect.arrayContaining(getStatuses()),
				filters.ALL,
				true
			)
			.mockReturnValue(getAggregateOutput());
		when(common.filterThreadsByTag)
			.calledWith(
				expect.arrayContaining(getAggregateOutput())
			)
			.mockReturnValue(getAggregateOutput());
		const state = {
			activeThreads: getThreads(),
			activeThreadsStatus: getStatuses()
		};
		const result = getAllActiveFilteredThreads(state);
		expect(common.buildThreadDataByPredicate).toHaveBeenCalled();
		expect(common.filterThreadsByTag).toHaveBeenCalled();
		expect(result).toEqual(getAggregateOutput());
	});
});
