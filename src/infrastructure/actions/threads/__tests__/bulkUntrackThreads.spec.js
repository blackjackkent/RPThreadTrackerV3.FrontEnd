import * as actions from '../bulkUntrackThreads';

describe('bulkUntrackThreads', () => {
	it('should create action with type, data, and analytics', () => {
		const threads = [{}, {}, {}];
		const action = actions.bulkUntrackThreads(threads);
		expect(action.type).toBe('BULK_UNTRACK_THREADS');
		expect(action.data).toBe(threads);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Thread');
		expect(action.analytics.event.action).toBe('Bulk untracked threads');
	});
});
describe('bulkUntrackThreadsFailure', () => {
	it('should create action with type', () => {
		const action = actions.bulkUntrackThreadsFailure();
		expect(action.type).toBe('BULK_UNTRACK_THREADS_FAILURE');
	});
});
describe('bulkUntrackThreadsSuccess', () => {
	it('should create action with type', () => {
		const action = actions.bulkUntrackThreadsSuccess();
		expect(action.type).toBe('BULK_UNTRACK_THREADS_SUCCESS');
	});
});
