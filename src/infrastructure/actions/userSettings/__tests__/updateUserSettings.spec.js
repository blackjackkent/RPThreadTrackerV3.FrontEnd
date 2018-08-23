import * as actions from '../updateUserSettings';

describe('updateUserSettings', () => {
	it('should create action with type, data, skip flag, and analytics', () => {
		const settings = { settingsId: '13579' };
		const action = actions.updateUserSettings(settings, true);
		expect(action.type).toBe('UPDATE_USER_SETTINGS');
		expect(action.data).toBe(settings);
		expect(action.shouldSkipViewUpdate).toBe(true);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Updated user settings');
	});
});
describe('updatedUserSettingsFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.updatedUserSettingsFailure(errorMessage);
		expect(action.type).toBe('UPDATED_USER_SETTINGS_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('updatedUserSettingsSuccess', () => {
	it('should create action with type and data', () => {
		const settings = { settingsId: '13579' };
		const action = actions.updatedUserSettingsSuccess(settings);
		expect(action.type).toBe('UPDATED_USER_SETTINGS_SUCCESS');
		expect(action.data).toBe(settings);
	});
});
