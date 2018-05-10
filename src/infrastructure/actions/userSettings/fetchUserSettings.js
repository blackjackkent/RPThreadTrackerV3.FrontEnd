export const FETCH_USER_SETTINGS = 'FETCH_USER_SETTINGS';
export function fetchUserSettings() {
	return {
		type: FETCH_USER_SETTINGS
	};
}
export const FETCHED_USER_SETTINGS_FAILURE = 'FETCHED_USER_SETTINGS_FAILURE';
export function fetchedUserSettingsFailure() {
	return {
		type: FETCHED_USER_SETTINGS_FAILURE
	};
}
export const FETCHED_USER_SETTINGS_SUCCESS = 'FETCHED_USER_SETTINGS_SUCCESS';
export function fetchedUserSettingsSuccess(data) {
	return {
		type: FETCHED_USER_SETTINGS_SUCCESS,
		data
	};
}
