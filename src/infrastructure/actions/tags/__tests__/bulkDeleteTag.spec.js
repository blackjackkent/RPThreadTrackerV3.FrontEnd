import * as actions from '../bulkDeleteTag';

describe('bulkDeleteTag', () => {
	it('should create action with type, data, and analytics', () => {
		const action = actions.bulkDeleteTag('test tag');
		expect(action.type).toBe('BULK_DELETE_TAG');
		expect(action.data).toBe('test tag');
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Tag');
		expect(action.analytics.event.action).toBe('Bulk deleted tag');
	});
});
describe('bulkDeleteTagFailure', () => {
	it('should create action with type', () => {
		const action = actions.bulkDeleteTagFailure();
		expect(action.type).toBe('BULK_DELETE_TAG_FAILURE');
	});
});
describe('bulkDeleteTagSuccess', () => {
	it('should create action with type', () => {
		const action = actions.bulkDeleteTagSuccess();
		expect(action.type).toBe('BULK_DELETE_TAG_SUCCESS');
	});
});
