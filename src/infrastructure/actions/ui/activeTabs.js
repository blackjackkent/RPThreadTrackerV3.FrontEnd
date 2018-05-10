import analytics from '../../constants/analytics';

export const SET_ACTIVE_HELP_TAB = 'SET_ACTIVE_HELP_TAB';
export function setActiveHelpTab(tab) {
	return {
		type: SET_ACTIVE_HELP_TAB,
		data: tab,
		analytics: {
			func: analytics.funcs.MODALVIEW,
			path: `/help/${tab}`
		}
	};
}
export const SET_ACTIVE_SETTINGS_TAB = 'SET_ACTIVE_SETTINGS_TAB';
export function setActiveSettingsTab(tab) {
	return {
		type: SET_ACTIVE_SETTINGS_TAB,
		data: tab,
		analytics: {
			func: analytics.funcs.MODALVIEW,
			path: `/settings/${tab}`
		}
	};
}
export const SET_ACTIVE_TOOLS_TAB = 'SET_ACTIVE_TOOLS_TAB';
export function setActiveToolsTab(tab) {
	return {
		type: SET_ACTIVE_TOOLS_TAB,
		data: tab,
		analytics: {
			func: analytics.funcs.MODALVIEW,
			path: `/tools/${tab}`
		}
	};
}
