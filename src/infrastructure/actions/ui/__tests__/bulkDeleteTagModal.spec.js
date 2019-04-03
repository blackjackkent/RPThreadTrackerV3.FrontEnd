import * as actions from '../bulkDeleteTagModal';

describe('closeBulkDeleteTagModal', () => {
	it('should create action with type', () => {
		const action = actions.closeBulkDeleteTagModal();
		expect(action.type).toBe('CLOSE_BULK_DELETE_TAG_MODAL');
	});
});
describe('openBulkDeleteTagModal', () => {
	it('should create action with type and data', () => {
		const action = actions.openBulkDeleteTagModal('selectedTag');
		expect(action.type).toBe('OPEN_BULK_DELETE_TAG_MODAL');
		expect(action.data).toEqual({
			selectedTag: 'selectedTag'
		});
	});
});
