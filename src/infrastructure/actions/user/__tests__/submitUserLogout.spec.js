import * as actions from '../submitUserLogout';

describe('submitUserLogout', () => {
	it('should create action with type and analytics', () => {
		const action = actions.submitUserLogout();
		expect(action.type).toBe('SUBMIT_USER_LOGOUT');
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Logged out');
	});
});
