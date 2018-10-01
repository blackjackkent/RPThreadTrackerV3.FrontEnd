import filters from '../filters';

const getThreadStatuses = () => [
	{ postId: 1, isCallingCharactersTurn: true, isQueued: true },
	{ postId: 2, isCallingCharactersTurn: true, isQueued: false },
	{ postId: 3, isCallingCharactersTurn: false, isQueued: true },
	{ postId: 4, isCallingCharactersTurn: false, isQueued: false }
];

describe('object structure', () => {
	it('should filter my turn thread', () => {
		const statuses = getThreadStatuses();
		const result = statuses.filter(filters.MY_TURN);
		expect(result).toHaveLength(1);
		expect(result[0].postId).toBe(2);
	});
	it('should filter their turn thread', () => {
		const statuses = getThreadStatuses();
		const result = statuses.filter(filters.THEIR_TURN);
		expect(result).toHaveLength(1);
		expect(result[0].postId).toBe(4);
	});
	it('should filter queued threads', () => {
		const statuses = getThreadStatuses();
		const result = statuses.filter(filters.QUEUED);
		expect(result).toHaveLength(2);
		expect(result[0].postId).toBe(1);
		expect(result[1].postId).toBe(3);
	});
	it('should filter all threads', () => {
		const statuses = getThreadStatuses();
		const result = statuses.filter(filters.ALL);
		expect(result).toHaveLength(4);
	});
});
