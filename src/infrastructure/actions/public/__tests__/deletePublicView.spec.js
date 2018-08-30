import * as actions from '../deletePublicView';

describe('deletePublicView', () => {
	it('should create action with type, data, and analytics', () => {
		const view = { id: 13569 };
		const action = actions.deletePublicView(view);
		expect(action.type).toBe('DELETE_PUBLIC_VIEW');
		expect(action.data).toBe(view);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Public');
		expect(action.analytics.event.action).toBe('Deleted public view');
	});
});
describe('deletePublicViewFailure', () => {
	it('should create action with type and data', () => {
		const action = actions.deletePublicViewFailure();
		expect(action.type).toBe('DELETE_PUBLIC_VIEW_FAILURE');
	});
});
describe('deletePublicViewSuccess', () => {
	it('should create action with type', () => {
		const action = actions.deletePublicViewSuccess();
		expect(action.type).toBe('DELETE_PUBLIC_VIEW_SUCCESS');
	});
});
