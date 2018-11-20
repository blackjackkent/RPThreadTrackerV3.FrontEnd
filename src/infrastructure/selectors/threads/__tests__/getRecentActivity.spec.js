import getRecentActivity from '../getRecentActivity';

jest.mock('../../common', () => ({
	buildThreadDataByPredicate: jest.fn(),
	shouldProcessThreads: jest.fn()
}));
jest.mock('../active/my-turn/getMyTurnThreads', () => () => ([]));
jest.mock('../../../constants/filters', () => ({
	MY_TURN: jest.fn()
}));

const getAggregateOutput = () => [
	{ thread: { threadId: 1 }, status: { lastPostDate: new Date(2018, 3, 3) } },
	{ thread: { threadId: 2 }, status: { lastPostDate: new Date(2018, 3, 2) } },
	{ thread: { threadId: 3 }, status: { lastPostDate: new Date(2018, 3, 5) } },
	{ thread: { threadId: 4 }, status: { lastPostDate: new Date(2018, 3, 7) } },
	{ thread: { threadId: 5 }, status: { lastPostDate: new Date(2018, 3, 1) } },
	{ thread: { threadId: 6 }, status: { lastPostDate: new Date(2018, 3, 6) } },
	{ thread: { threadId: 7 }, status: { lastPostDate: new Date(2018, 3, 4) } }
];
const getAggregateOutputWithNulls = () => [
	{ thread: { threadId: 1 }, status: null },
	{ thread: { threadId: 2 }, status: null },
	{ thread: { threadId: 3 }, status: { lastPostDate: new Date(2018, 3, 3) } },
	{ thread: { threadId: 4 }, status: { lastPostDate: new Date(2018, 3, 2) } },
	{ thread: { threadId: 5 }, status: { lastPostDate: new Date(2018, 3, 5) } },
	{ thread: { threadId: 6 }, status: null },
	{ thread: { threadId: 7 }, status: null }
];

beforeEach(() => {
	jest.resetAllMocks();
});
describe('behavior', () => {
	it('should return empty array when no threads provided', () => {
		// Act
		const result = getRecentActivity.resultFunc([]);
		// Assert
		expect(result).toEqual([]);
	});
	it('should return top five items by date', () => {
		// Act
		const result = getRecentActivity.resultFunc(getAggregateOutput());
		// Assert
		expect(result).toHaveLength(5);
		expect(result[0].thread.threadId).toBe(4);
		expect(result[1].thread.threadId).toBe(6);
		expect(result[2].thread.threadId).toBe(3);
		expect(result[3].thread.threadId).toBe(7);
		expect(result[4].thread.threadId).toBe(1);
	});
	it('should handle null values', () => {
		// Act
		const result = getRecentActivity.resultFunc(getAggregateOutputWithNulls());
		// Assert
		expect(result).toHaveLength(5);
		expect(result[0].thread.threadId).toBe(5);
		expect(result[1].thread.threadId).toBe(3);
		expect(result[2].thread.threadId).toBe(4);
		expect(result[3].thread.threadId).toBe(1);
		expect(result[4].thread.threadId).toBe(2);
	});
});
