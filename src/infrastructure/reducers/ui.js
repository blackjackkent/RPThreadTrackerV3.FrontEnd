import {
	TOGGLE_SIDEBAR,
	TOGGLE_MOBILE_SIDEBAR,
	TOGGLE_NEWS_ASIDE,
	TOGGLE_HEADER_DROPDOWN,
	TOGGLE_IS_THREAD_FILTER_CARD_HIDDEN,
	OPEN_EDIT_CHARACTER_MODAL,
	CLOSE_EDIT_CHARACTER_MODAL,
	SET_ACTIVE_HELP_TAB,
	SET_ACTIVE_SETTINGS_TAB,
	SET_ACTIVE_TOOLS_TAB,
	SUBMIT_USER_LOGOUT
} from '../actions';

const defaultState = {
	isNewsAsideOpen: false,
	isSidebarOpen: true,
	isHeaderDropdownOpen: false,
	isMobileSidebarOpen: false,
	isMaintenanceMode: false,
	isThreadFilterCardHidden: true,
	isEditCharacterModalOpen: false,
	activeHelpTab: 'about',
	activeSettingsTab: 'change-password',
	activeToolsTab: 'export-threads'
};

function ui(state = defaultState, action) {
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
		case SET_ACTIVE_HELP_TAB:
			return Object.assign({}, state, {
				activeHelpTab: action.data
			});
		case SET_ACTIVE_SETTINGS_TAB:
			return Object.assign({}, state, {
				activeSettingsTab: action.data
			});
		case SET_ACTIVE_TOOLS_TAB:
			return Object.assign({}, state, {
				activeToolsTab: action.data
			});
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default ui;
