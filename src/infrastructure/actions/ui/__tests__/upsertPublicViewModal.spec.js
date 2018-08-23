import * as actions from '../upsertPublicViewModal';

describe('closeUpsertPublicViewModal', () => {
	it('should create action with type', () => {
		const action = actions.closeUpsertPublicViewModal();
		expect(action.type).toBe('CLOSE_UPSERT_PUBLIC_VIEW_MODAL');
	});
});
describe('openUpsertPublicViewModal', () => {
	it('should create action with type, data, and analytics when view has ID', () => {
		const data = { id: 1 };
		const action = actions.openUpsertPublicViewModal(data);
		expect(action.type).toBe('OPEN_UPSERT_PUBLIC_VIEW_MODAL');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/modals/update-public-view');
	});
	it('should create action with type, data, and analytics when view has no ID', () => {
		const data = { slug: 'test-view' };
		const action = actions.openUpsertPublicViewModal(data);
		expect(action.type).toBe('OPEN_UPSERT_PUBLIC_VIEW_MODAL');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/modals/add-public-view');
	});
});
