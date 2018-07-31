import * as actions from '../upsertPublicView';

describe('upsertPublicView', () => {
	it('should create action with type, data, and analytics if view ID is present', () => {
		const view = { id: 13579 };
		const action = actions.upsertPublicView(view);
		expect(action.type).toBe('UPSERT_PUBLIC_VIEW');
		expect(action.data).toBe(view);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Public');
		expect(action.analytics.event.action).toBe('Edited public view');
	});
	it('should create action with type, data, and analytics if view ID is not present', () => {
		const view = { slug: 'test-view' };
		const action = actions.upsertPublicView(view);
		expect(action.type).toBe('UPSERT_PUBLIC_VIEW');
		expect(action.data).toBe(view);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Public');
		expect(action.analytics.event.action).toBe('Added public view');
	});
});
describe('upsertPublicViewFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.upsertPublicViewFailure(errorMessage);
		expect(action.type).toBe('UPSERT_PUBLIC_VIEW_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('upsertPublicViewSuccess', () => {
	it('should create action with type and data', () => {
		const view = { id: 13579 };
		const action = actions.upsertPublicViewSuccess(view);
		expect(action.type).toBe('UPSERT_PUBLIC_VIEW_SUCCESS');
		expect(action.data).toBe(view);
	});
});
