import * as actions from '../fetchUserSettings';

describe('fetchUserSettings', () => {
	it('should create action with type', () => {
		const action = actions.fetchUserSettings();
		expect(action.type).toBe('FETCH_USER_SETTINGS');
	});
});
describe('fetchedUserSettingsFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedUserSettingsFailure();
		expect(action.type).toBe('FETCHED_USER_SETTINGS_FAILURE');
	});
});
describe('fetchedUserSettingsSuccess', () => {
	it('should create action with type and data', () => {
		const data = {
			settingsId: '12345'
		};
		const action = actions.fetchedUserSettingsSuccess(data);
		expect(action.type).toBe('FETCHED_USER_SETTINGS_SUCCESS');
		expect(action.data).toBe(data);
	});
});
