import * as actions from '../deleteAccountConfirmationModal';

describe('closeDeleteAccountConfirmationModal', () => {
	it('should create action with type', () => {
		const action = actions.closeDeleteAccountConfirmationModal();
		expect(action.type).toBe('CLOSE_DELETE_ACCOUNT_CONFIRMATION_MODAL');
	});
});
describe('openDeleteAccountConfirmationModal', () => {
	it('should create action with type and data', () => {
		const action = actions.openDeleteAccountConfirmationModal();
		expect(action.type).toBe('OPEN_DELETE_ACCOUNT_CONFIRMATION_MODAL');
	});
});
