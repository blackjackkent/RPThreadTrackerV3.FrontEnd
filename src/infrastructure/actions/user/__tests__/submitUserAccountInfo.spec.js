import * as actions from '../submitUserAccountInfo';

describe('submitUserAccountInfo', () => {
	it('should create action with type, data, and analytics', () => {
		const data = {
			username: 'test-username'
		};
		const action = actions.submitUserAccountInfo(data);
		expect(action.type).toBe('SUBMIT_USER_ACCOUNT_INFO');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Updated user account info');
	});
});
describe('submitUserAccountInfoFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.submitUserAccountInfoFailure(errorMessage);
		expect(action.type).toBe('SUBMIT_USER_ACCOUNT_INFO_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('submitUserAccountInfoSuccess', () => {
	it('should create action with type', () => {
		const action = actions.submitUserAccountInfoSuccess();
		expect(action.type).toBe('SUBMIT_USER_ACCOUNT_INFO_SUCCESS');
	});
});
