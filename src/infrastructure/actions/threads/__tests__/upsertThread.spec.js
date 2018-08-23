import * as actions from '../upsertThread';

describe('upsertThread', () => {
	it('should create action with type, data, and analytics if thread ID is present', () => {
		const thread = { threadId: 13579 };
		const action = actions.upsertThread(thread);
		expect(action.type).toBe('UPSERT_THREAD');
		expect(action.data).toBe(thread);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Thread');
		expect(action.analytics.event.action).toBe('Updated thread');
	});
	it('should create action with type, data, and analytics if thread ID is not present', () => {
		const thread = { userTitle: 'Test Thread' };
		const action = actions.upsertThread(thread);
		expect(action.type).toBe('UPSERT_THREAD');
		expect(action.data).toBe(thread);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Thread');
		expect(action.analytics.event.action).toBe('Added thread');
	});
});
describe('upsertThreadFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.upsertThreadFailure(errorMessage);
		expect(action.type).toBe('UPSERT_THREAD_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('upsertThreadSuccess', () => {
	it('should create action with type and data', () => {
		const thread = { threadId: 13579 };
		const action = actions.upsertThreadSuccess(thread);
		expect(action.type).toBe('UPSERT_THREAD_SUCCESS');
		expect(action.data).toBe(thread);
	});
});
