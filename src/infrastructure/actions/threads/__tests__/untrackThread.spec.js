import * as actions from '../untrackThread';

describe('untrackThread', () => {
	it('should create action with type, data, and analytics', () => {
		const data = {
			threadId: 1
		};
		const action = actions.untrackThread(data);
		expect(action.type).toBe('UNTRACK_THREAD');
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Thread');
		expect(action.analytics.event.action).toBe('Untracked thread');
	});
});
describe('untrackThreadFailure', () => {
	it('should create action with type and data', () => {
		const action = actions.untrackThreadFailure();
		expect(action.type).toBe('UNTRACK_THREAD_FAILURE');
	});
});
describe('untrackThreadSuccess', () => {
	it('should create action with type', () => {
		const action = actions.untrackThreadSuccess();
		expect(action.type).toBe('UNTRACK_THREAD_SUCCESS');
	});
});
