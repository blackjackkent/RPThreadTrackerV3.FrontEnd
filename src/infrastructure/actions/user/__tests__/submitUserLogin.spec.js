import * as actions from '../submitUserLogin';

describe('submitUserLogin', () => {
	it('should create action with type, data, and analytics', () => {
		const data = { username: 'test-username' };
		const action = actions.submitUserLogin(data);
		expect(action.type).toBe('SUBMIT_USER_LOGIN');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Logged in');
	});
});
describe('submitUserLoginFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.submitUserLoginFailure(errorMessage);
		expect(action.type).toBe('SUBMIT_USER_LOGIN_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('submitUserLoginSuccess', () => {
	it('should create action with type', () => {
		const action = actions.submitUserLoginSuccess();
		expect(action.type).toBe('SUBMIT_USER_LOGIN_SUCCESS');
	});
});
