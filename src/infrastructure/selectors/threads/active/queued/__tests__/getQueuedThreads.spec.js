import { when } from 'jest-when';
import * as common from '~/infrastructure/selectors/common';
import * as filters from '~/infrastructure/constants/filters';
import getQueuedThreads from '../getQueuedThreads';

jest.mock('~/infrastructure/selectors/common', () => ({
	buildThreadDataByPredicate: jest.fn(),
	shouldProcessThreads: jest.fn(),
	getAllActiveThreads: jest.fn(),
	getAllActiveThreadStatus: jest.fn()
}));
jest.mock('~/infrastructure/constants/filters', () => ({
	QUEUED: jest.fn()
}));

const getThreads = () => [
	{
		threadId: 1
	},
	{
		threadId: 2
	},
	{
		threadId: 3
	},
	{
		threadId: 4
	},
	{
		threadId: 5
	},
	{
		threadId: 6
	},
	{
		threadId: 7
	}
];
const getStatuses = () => [
	{
		postId: 1
	},
	{
		postId: 2
	},
	{
		postId: 3
	},
	{
		postId: 4
	},
	{
		postId: 5
	},
	{
		postId: 6
	},
	{
		postId: 7
	}
];
const getAggregateOutput = () => [
	{
		thread: {
			threadId: 1
		},
		status: {
			postId: 1
		}
	},
	{
		thread: {
			threadId: 2
		},
		status: {
			postId: 2
		}
	},
	{
		thread: {
			threadId: 3
		},
		status: {
			postId: 3
		}
	},
	{
		thread: {
			threadId: 4
		},
		status: {
			postId: 4
		}
	},
	{
		thread: {
			threadId: 5
		},
		status: {
			postId: 5
		}
	},
	{
		thread: {
			threadId: 6
		},
		status: {
			postId: 6
		}
	},
	{
		thread: {
			threadId: 7
		},
		status: {
			postId: 7
		}
	}
];

beforeEach(() => {
	jest.resetAllMocks();
});
describe('behavior', () => {
	it('should return empty array when shouldProcessThreads is false', () => {
		// Arrange
		const state = {
			activeThreads: {
				threads: []
			},
			activeThreadsStatus: [{}, {}, {}]
		};
		common.shouldProcessThreads.mockReturnValue(false);
		// Act
		const result = getQueuedThreads.resultFunc(state.activeThreads, state.activeThreadsStatus);
		// Assert
		expect(result).toEqual([]);
	});
	it('should return threads when shouldProcessThreads is true', () => {
		// Arrange
		common.shouldProcessThreads.mockReturnValue(true);
		when(common.buildThreadDataByPredicate)
			.calledWith(
				expect.arrayContaining(getThreads()),
				expect.arrayContaining(getStatuses()),
				filters.QUEUED
			)
			.mockReturnValue(getAggregateOutput());
		// Act
		const result = getQueuedThreads.resultFunc(getThreads(), getStatuses());
		// Assert
		expect(common.buildThreadDataByPredicate).toHaveBeenCalled();
		expect(result).toEqual(getAggregateOutput());
	});
});
