import analytics from '../../constants/analytics';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export function toggleSidebar(value) {
	return {
		type: TOGGLE_SIDEBAR,
		data: value,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.UI,
				action: 'Toggled sidebar'
			}
		}
	};
}
