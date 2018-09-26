import buildThreadDataByPredicate from '../buildThreadDataByPredicate';

const getThreads = () => [
	{
		threadId: 'a',
		postId: 1
	},
	{
		threadId: 'b',
		postId: 2
	},
	{
		threadId: 'c'
	},
	{
		threadId: 'd',
		postId: 4
	}
];
const getStatuses = () => [
	{
		postId: 1,
		isCallingCharactersTurn: true
	},
	{
		postId: 2,
		isCallingCharactersTurn: true
	},
	{
		postId: 4,
		isCallingCharactersTurn: false
	}
];

describe('behavior', () => {
	it('should return matching threads when includeNullStatus is false', () => {
		const threads = getThreads();
		const statuses = getStatuses();
		const result = buildThreadDataByPredicate(
			threads, statuses, s => s.isCallingCharactersTurn, false
		);
		expect(result).toHaveLength(2);
		expect(result[0]).toEqual({
			thread: {
				threadId: 'a',
				postId: 1
			},
			status: {
				postId: 1,
				isCallingCharactersTurn: true
			}
		});
		expect(result[1]).toEqual({
			thread: {
				threadId: 'b',
				postId: 2
			},
			status: {
				postId: 2,
				isCallingCharactersTurn: true
			}
		});
	});
	it('should return matching threads and threads without post ID when includeNullStatus is true', () => {
		const threads = getThreads();
		const statuses = getStatuses();
		const result = buildThreadDataByPredicate(
			threads, statuses, s => s.isCallingCharactersTurn, true
		);
		expect(result).toHaveLength(3);
		expect(result[0]).toEqual({
			thread: {
				threadId: 'a',
				postId: 1
			},
			status: {
				postId: 1,
				isCallingCharactersTurn: true
			}
		});
		expect(result[1]).toEqual({
			thread: {
				threadId: 'b',
				postId: 2
			},
			status: {
				postId: 2,
				isCallingCharactersTurn: true
			}
		});
		expect(result[2]).toEqual({
			thread: {
				threadId: 'c'
			},
			status: null
		});
	});
});
