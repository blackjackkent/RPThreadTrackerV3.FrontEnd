import * as actions from '../submitUserForgotPassword';

describe('submitUserForgotPassword', () => {
	it('should create action with type, data, and analytics', () => {
		const data = { email: 'test@test.com' };
		const action = actions.submitUserForgotPassword(data);
		expect(action.type).toBe('SUBMIT_USER_FORGOT_PASSWORD');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Requested forgot password link');
	});
});
describe('submitUserForgotPasswordFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.submitUserForgotPasswordFailure(errorMessage);
		expect(action.type).toBe('SUBMIT_USER_FORGOT_PASSWORD_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('submitUserForgotPasswordSuccess', () => {
	it('should create action with type', () => {
		const action = actions.submitUserForgotPasswordSuccess();
		expect(action.type).toBe('SUBMIT_USER_FORGOT_PASSWORD_SUCCESS');
	});
});
