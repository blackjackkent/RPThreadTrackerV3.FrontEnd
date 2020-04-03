import shouldProcessThreads from '../shouldProcessThreads';

const getThreads = () => [
	{
		postId: ''
	},
	{
		postId: ''
	},
	{
		postId: '12345'
	},
	{
		postId: '23456'
	}
];

const getThreadsWithNoStatuses = () => [
	{
		postId: ''
	},
	{
		postId: ''
	}
];

const getStatuses = () => [
	{
		postId: '12345'
	},
	{
		postId: '23456'
	}
];

describe('behavior', () => {
	it('should return false if no threads', () => {
		const result = shouldProcessThreads([], getStatuses());
		expect(result).toBe(false);
	});
	it('should return false if no statuses loaded and they are expected', () => {
		const result = shouldProcessThreads(getThreads(), []);
		expect(result).toBe(false);
	});
	it('should return true if no statuses loaded and they are not expected', () => {
		const result = shouldProcessThreads(getThreadsWithNoStatuses(), []);
		expect(result).toBe(true);
	});
	it('should return true if statuses loaded', () => {
		const result = shouldProcessThreads(getThreads(), getStatuses());
		expect(result).toBe(true);
	});
});
