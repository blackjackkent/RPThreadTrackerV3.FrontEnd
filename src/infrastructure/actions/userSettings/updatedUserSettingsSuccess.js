export const UPDATED_USER_SETTINGS_SUCCESS = 'UPDATED_USER_SETTINGS_SUCCESS';
export function updatedUserSettingsSuccess(data) {
	return {
		type: UPDATED_USER_SETTINGS_SUCCESS,
		data
	};
}
