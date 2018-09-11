import analytics from '../../constants/analytics';

export const UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS';
export function updateUserSettings(data, shouldSkipViewUpdate) {
	return {
		type: UPDATE_USER_SETTINGS,
		data,
		shouldSkipViewUpdate,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Updated user settings'
			}
		}
	};
}
export const UPDATED_USER_SETTINGS_FAILURE = 'UPDATED_USER_SETTINGS_FAILURE';
export function updatedUserSettingsFailure() {
	return {
		type: UPDATED_USER_SETTINGS_FAILURE
	};
}
export const UPDATED_USER_SETTINGS_SUCCESS = 'UPDATED_USER_SETTINGS_SUCCESS';
export function updatedUserSettingsSuccess(data) {
	return {
		type: UPDATED_USER_SETTINGS_SUCCESS,
		data
	};
}
