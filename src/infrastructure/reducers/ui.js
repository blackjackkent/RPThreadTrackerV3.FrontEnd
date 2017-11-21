import {
	TOGGLE_SIDEBAR,
	TOGGLE_MOBILE_SIDEBAR,
	TOGGLE_NEWS_ASIDE,
	TOGGLE_HEADER_DROPDOWN,
	TOGGLE_IS_THREAD_FILTER_CARD_HIDDEN,
	OPEN_EDIT_CHARACTER_MODAL,
	CLOSE_EDIT_CHARACTER_MODAL
} from '../actions';

function ui(state = {
	isNewsAsideOpen: false,
	isSidebarOpen: true,
	isHeaderDropdownOpen: false,
	isMobileSidebarOpen: false,
	isMaintenanceMode: false,
	isThreadFilterCardHidden: true,
	isEditCharacterModalOpen: false
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
		case TOGGLE_IS_THREAD_FILTER_CARD_HIDDEN:
			return Object.assign({}, state, {
				isThreadFilterCardHidden: !state.isThreadFilterCardHidden
			});
		case OPEN_EDIT_CHARACTER_MODAL:
			return Object.assign({}, state, {
				isEditCharacterModalOpen: true
			});
		case CLOSE_EDIT_CHARACTER_MODAL:
			return Object.assign({}, state, {
				isEditCharacterModalOpen: false
			});
		default:
			return state;
	}
}

export default ui;
