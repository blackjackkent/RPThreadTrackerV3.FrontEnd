import analytics from '../../constants/analytics';

export const TOGGLE_HEADER_DROPDOWN = 'TOGGLE_HEADER_DROPDOWN';
export function toggleHeaderDropdown(value) {
	return {
		type: TOGGLE_HEADER_DROPDOWN,
		data: value,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.UI,
				action: 'Toggled header dropdown'
			}
		}
	};
}
