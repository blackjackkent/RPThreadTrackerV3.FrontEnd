import * as actions from '../submitUserRegistration';

describe('submitUserRegistration', () => {
	it('should create action with type, data, and analytics', () => {
		const data = { username: 'test-username' };
		const action = actions.submitUserRegistration(data);
		expect(action.type).toBe('SUBMIT_USER_REGISTRATION');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Registered');
	});
});
describe('submitUserRegistrationFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.submitUserRegistrationFailure(errorMessage);
		expect(action.type).toBe('SUBMIT_USER_REGISTRATION_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('submitUserRegistrationSuccess', () => {
	it('should create action with type', () => {
		const action = actions.submitUserRegistrationSuccess();
		expect(action.type).toBe('SUBMIT_USER_REGISTRATION_SUCCESS');
	});
});
