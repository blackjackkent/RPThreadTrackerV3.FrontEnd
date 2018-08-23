import * as actions from '../upsertThreadModal';

describe('closeUpsertThreadModal', () => {
	it('should create action with type', () => {
		const action = actions.closeUpsertThreadModal();
		expect(action.type).toBe('CLOSE_UPSERT_THREAD_MODAL');
	});
});
describe('openUpsertThreadModal', () => {
	it('should create action with type, data, and analytics when thread has ID', () => {
		const data = { threadId: 1 };
		const action = actions.openUpsertThreadModal(data);
		expect(action.type).toBe('OPEN_UPSERT_THREAD_MODAL');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/modals/update-thread');
	});
	it('should create action with type, data, and analytics when thread has no ID', () => {
		const data = { userTitle: 'Test Thread' };
		const action = actions.openUpsertThreadModal(data);
		expect(action.type).toBe('OPEN_UPSERT_THREAD_MODAL');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/modals/add-thread');
	});
	it('should create action with type, data, and analytics when thread is undefined', () => {
		const action = actions.openUpsertThreadModal();
		expect(action.type).toBe('OPEN_UPSERT_THREAD_MODAL');
		expect(action.data).toBeUndefined();
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/modals/add-thread');
	});
});
