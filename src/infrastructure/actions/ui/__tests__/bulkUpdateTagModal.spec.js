import * as actions from '../bulkUpdateTagModal';

describe('closeBulkUpdateTagModal', () => {
	it('should create action with type', () => {
		const action = actions.closeBulkUpdateTagModal();
		expect(action.type).toBe('CLOSE_BULK_UPDATE_TAG_MODAL');
	});
});
describe('openBulkUpdateTagModal', () => {
	it('should create action with type and data', () => {
		const action = actions.openBulkUpdateTagModal('selectedTag', 'updatedValue');
		expect(action.type).toBe('OPEN_BULK_UPDATE_TAG_MODAL');
		expect(action.data).toEqual({
			selectedTag: 'selectedTag',
			updatedValue: 'updatedValue'
		});
	});
	it('should handle null updated value', () => {
		const action = actions.openBulkUpdateTagModal('selectedTag');
		expect(action.type).toBe('OPEN_BULK_UPDATE_TAG_MODAL');
		expect(action.data).toEqual({
			selectedTag: 'selectedTag',
			updatedValue: null
		});
	});
});
