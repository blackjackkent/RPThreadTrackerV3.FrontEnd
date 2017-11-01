import { TOGGLE_SIDEBAR, TOGGLE_MOBILE_SIDEBAR, TOGGLE_NEWS_ASIDE, TOGGLE_HEADER_DROPDOWN } from '../actions';

function ui(state = {
	isNewsAsideOpen: false,
	isSidebarOpen: true,
	isHeaderDropdownOpen: false,
	isMobileSidebarOpen: false
}, action) {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return Object.assign({}, state, {
				isSidebarOpen: !state.isSidebarOpen
			});
		case TOGGLE_MOBILE_SIDEBAR:
			return Object.assign({}, state, {
				isMobileSidebarOpen: !state.isMobileSidebarOpen
			});
		case TOGGLE_NEWS_ASIDE:
			return Object.assign({}, state, {
				isNewsAsideOpen: !state.isNewsAsideOpen
			});
		case TOGGLE_HEADER_DROPDOWN:
			return Object.assign({}, state, {
				isHeaderDropdownOpen: !state.isHeaderDropdownOpen
			});
		default:
			return state;
	}
}

export default ui;
