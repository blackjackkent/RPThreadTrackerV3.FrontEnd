export const FETCHED_USER_SETTINGS_SUCCESS = 'FETCHED_USER_SETTINGS_SUCCESS';
export function fetchedUserSettingsSuccess(data) {
	return {
		type: FETCHED_USER_SETTINGS_SUCCESS,
		data
	};
}
