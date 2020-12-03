import * as actions from '../exportThreads';

describe('exportThreads', () => {
	it('should create action with type, data, and analytics', () => {
		const data = {
			includeHiatused: true
		};
		const action = actions.exportThreads(data);
		expect(action.type).toBe('EXPORT_THREADS');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Thread');
		expect(action.analytics.event.action).toBe('Exported threads');
	});
});
describe('exportThreadsFailure', () => {
	it('should create action with type', () => {
		const action = actions.exportThreadsFailure();
		expect(action.type).toBe('EXPORT_THREADS_FAILURE');
	});
});
describe('exportThreadsSuccess', () => {
	it('should create action with type', () => {
		const action = actions.exportThreadsSuccess();
		expect(action.type).toBe('EXPORT_THREADS_SUCCESS');
	});
});
