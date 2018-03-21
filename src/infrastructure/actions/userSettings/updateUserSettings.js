export const UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS';
export function updateUserSettings(data, shouldSkipViewUpdate) {
	return {
		type: UPDATE_USER_SETTINGS,
		data,
		shouldSkipViewUpdate
	};
}
