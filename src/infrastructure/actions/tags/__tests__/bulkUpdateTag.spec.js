import * as actions from '../bulkUpdateTag';

describe('bulkUpdateTag', () => {
	it('should create action with type, data, and analytics', () => {
		const action = actions.bulkUpdateTag('test tag');
		expect(action.type).toBe('BULK_UPDATE_TAG');
		expect(action.data).toBe('test tag');
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Tag');
		expect(action.analytics.event.action).toBe('Bulk updated tag');
	});
});
describe('bulkUpdateTagFailure', () => {
	it('should create action with type', () => {
		const action = actions.bulkUpdateTagFailure();
		expect(action.type).toBe('BULK_UPDATE_TAG_FAILURE');
	});
});
describe('bulkUpdateTagSuccess', () => {
	it('should create action with type', () => {
		const action = actions.bulkUpdateTagSuccess();
		expect(action.type).toBe('BULK_UPDATE_TAG_SUCCESS');
	});
});
