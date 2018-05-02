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
