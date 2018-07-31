import * as actions from '../bulkUpdateThreads';

describe('bulkUpdateThreads', () => {
	it('should create action with type, data, and analytics', () => {
		const threads = [{}, {}, {}];
		const action = actions.bulkUpdateThreads(threads);
		expect(action.type).toBe('BULK_UPDATE_THREADS');
		expect(action.data).toBe(threads);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Thread');
		expect(action.analytics.event.action).toBe('Bulk updated threads');
	});
});
describe('bulkUpdateThreadsFailure', () => {
	it('should create action with type', () => {
		const action = actions.bulkUpdateThreadsFailure();
		expect(action.type).toBe('BULK_UPDATE_THREADS_FAILURE');
	});
});
describe('bulkUpdateThreadsSuccess', () => {
	it('should create action with type', () => {
		const action = actions.bulkUpdateThreadsSuccess();
		expect(action.type).toBe('BULK_UPDATE_THREADS_SUCCESS');
	});
});
