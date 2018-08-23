import * as actions from '../deletePublicViewModal';

describe('closeDeletePublicViewModal', () => {
	it('should create action with type', () => {
		const action = actions.closeDeletePublicViewModal();
		expect(action.type).toBe('CLOSE_DELETE_PUBLIC_VIEW_MODAL');
	});
});
describe('openDeletePublicViewModal', () => {
	it('should create action with type and data', () => {
		const data = [{}, {}, {}];
		const action = actions.openDeletePublicViewModal(data);
		expect(action.type).toBe('OPEN_DELETE_PUBLIC_VIEW_MODAL');
		expect(action.data).toBe(data);
	});
});
