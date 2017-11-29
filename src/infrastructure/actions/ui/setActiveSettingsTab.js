export const SET_ACTIVE_SETTINGS_TAB = 'SET_ACTIVE_SETTINGS_TAB';
export function setActiveSettingsTab(tab) {
	return {
		type: SET_ACTIVE_SETTINGS_TAB,
		data: tab
	};
}
