import * as actions from '../submitUserAccountDeletion';

describe('submitUserAccountDeletion', () => {
	it('should create action with type, data, and analytics', () => {
		const action = actions.submitUserAccountDeletion();
		expect(action.type).toBe('SUBMIT_USER_ACCOUNT_DELETION');
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Deleted account');
	});
});
describe('submitUserAccountDeletionFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.submitUserAccountDeletionFailure(errorMessage);
		expect(action.type).toBe('SUBMIT_USER_ACCOUNT_DELETION_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('submitUserAccountDeletionSuccess', () => {
	it('should create action with type', () => {
		const action = actions.submitUserAccountDeletionSuccess();
		expect(action.type).toBe('SUBMIT_USER_ACCOUNT_DELETION_SUCCESS');
	});
});
