export const UPDATED_USER_SETTINGS_FAILURE = 'UPDATED_USER_SETTINGS_FAILURE';
export function updatedUserSettingsFailure(data) {
	return {
		type: UPDATED_USER_SETTINGS_FAILURE,
		data
	};
}
