import * as actions from '../submitUserResetPassword';

describe('submitUserResetPassword', () => {
	it('should create action with type, data, and analytics', () => {
		const data = {
			newPassword: 'test-password'
		};
		const action = actions.submitUserResetPassword(data);
		expect(action.type).toBe('SUBMIT_USER_RESET_PASSWORD');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Reset password from link');
	});
});
describe('submitUserResetPasswordFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.submitUserResetPasswordFailure(errorMessage);
		expect(action.type).toBe('SUBMIT_USER_RESET_PASSWORD_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('submitUserResetPasswordSuccess', () => {
	it('should create action with type', () => {
		const action = actions.submitUserResetPasswordSuccess();
		expect(action.type).toBe('SUBMIT_USER_RESET_PASSWORD_SUCCESS');
	});
});
