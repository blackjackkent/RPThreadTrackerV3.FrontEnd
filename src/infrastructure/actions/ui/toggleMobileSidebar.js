import analytics from '../../constants/analytics';

export const TOGGLE_MOBILE_SIDEBAR = 'TOGGLE_MOBILE_SIDEBAR';
export function toggleMobileSidebar(value) {
	return {
		type: TOGGLE_MOBILE_SIDEBAR,
		data: value,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.UI,
				action: 'Toggled mobile sidebar'
			}
		}
	};
}
