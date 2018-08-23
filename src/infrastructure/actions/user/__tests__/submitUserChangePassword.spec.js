import * as actions from '../submitUserChangePassword';

describe('submitUserChangePassword', () => {
	it('should create action with type, data, and analytics', () => {
		const data = { newPassword: 'test-password' };
		const action = actions.submitUserChangePassword(data);
		expect(action.type).toBe('SUBMIT_USER_CHANGE_PASSWORD');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Updated password');
	});
});
describe('submitUserChangePasswordFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.submitUserChangePasswordFailure(errorMessage);
		expect(action.type).toBe('SUBMIT_USER_CHANGE_PASSWORD_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('submitUserChangePasswordSuccess', () => {
	it('should create action with type', () => {
		const action = actions.submitUserChangePasswordSuccess();
		expect(action.type).toBe('SUBMIT_USER_CHANGE_PASSWORD_SUCCESS');
	});
});
