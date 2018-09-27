import getRecentActivity from '../getRecentActivity';

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
});
