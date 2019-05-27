import analytics from '../../constants/analytics';

export const LOAD_SIDEBAR_OPEN = 'LOAD_SIDEBAR_OPEN';
export function loadSidebarOpen() {
	return {
		type: LOAD_SIDEBAR_OPEN
	};
}

export const SET_SIDEBAR_OPEN = 'SET_SIDEBAR_OPEN';
export function setSidebarOpen(value) {
	return {
		type: SET_SIDEBAR_OPEN,
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

export const LOAD_SIDEBAR_OPEN_SUCCESS = 'LOAD_SIDEBAR_OPEN_SUCCESS';
export function loadSidebarOpenSuccess(data) {
	return {
		type: LOAD_SIDEBAR_OPEN_SUCCESS,
		data
	};
}
