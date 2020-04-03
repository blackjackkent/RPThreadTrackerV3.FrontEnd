import { when } from 'jest-when';
import * as common from '../../common';
import * as filters from '../../../constants/filters';
import getPublicThreads from '../getPublicThreads';

jest.mock('../../common', () => ({
	buildThreadDataByPredicate: jest.fn(),
	filterThreadsByPublicViewFilter: jest.fn(),
	filterPublicStatusesByTurnFilter: jest.fn(),
	shouldProcessThreads: jest.fn(),
	getAllPublicThreads: jest.fn(),
	getAllPublicThreadStatus: jest.fn(),
	getPublicThreadFilter: jest.fn(),
	getPublicThreadsView: jest.fn()
}));
jest.mock('../../../constants/filters', () => ({
	ALL: jest.fn()
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
	},
	{
		postId: 8
	}
];
const getFilteredStatuses = () => [
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
const getFilterOutput = () => [
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
			threadId: 3
		},
		status: {
			postId: 3
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
			threadId: 7
		},
		status: {
			postId: 7
		}
	}
];
const getView = () => ({
	id: '12345',
	turnFilter: {}
});

beforeEach(() => {
	jest.resetAllMocks();
});
describe('behavior', () => {
	it('should return empty array when shouldProcessThreads is false', () => {
		// Arrange
		const state = {
			publicThreads: {
				threads: []
			},
			publicThreadsStatus: [{}, {}, {}]
		};
		common.shouldProcessThreads.mockReturnValue(false);
		// Act
		const result = getPublicThreads.resultFunc(
			state.publicThreads,
			state.publicThreadsStatus,
			'test-filter',
			getView()
		);
		// Assert
		expect(result).toEqual([]);
	});
	it('should return threads when shouldProcessThreads is true', () => {
		// Arrange
		common.shouldProcessThreads.mockReturnValue(true);
		when(common.filterPublicStatusesByTurnFilter)
			.calledWith(
				expect.arrayContaining(getStatuses()),
				expect.arrayContaining(getThreads()),
				getView()
			)
			.mockReturnValue(getFilteredStatuses());
		when(common.buildThreadDataByPredicate)
			.calledWith(
				expect.arrayContaining(getThreads()),
				expect.arrayContaining(getFilteredStatuses()),
				filters.ALL,
				true
			)
			.mockReturnValue(getAggregateOutput());
		when(common.filterThreadsByPublicViewFilter)
			.calledWith(expect.arrayContaining(getAggregateOutput()), 'test-filter')
			.mockReturnValue(getFilterOutput());
		// Act
		const result = getPublicThreads.resultFunc(
			getThreads(),
			getStatuses(),
			'test-filter',
			getView()
		);
		// Assert
		expect(common.buildThreadDataByPredicate).toHaveBeenCalled();
		expect(common.filterThreadsByPublicViewFilter).toHaveBeenCalled();
		expect(result).toEqual(getFilterOutput());
	});
});
