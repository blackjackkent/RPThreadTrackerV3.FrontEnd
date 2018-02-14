import { FETCHED_USER_SETTINGS_SUCCESS, UPDATED_USER_SETTINGS_SUCCESS, UPDATE_USER_SETTINGS, SUBMIT_USER_LOGOUT } from '../actions';

const defaultState = { hasDashboardAtAGlanceHidden: false };
function userSettings(state = defaultState, action) {
	switch (action.type) {
		case FETCHED_USER_SETTINGS_SUCCESS:
		case UPDATED_USER_SETTINGS_SUCCESS:
		case UPDATE_USER_SETTINGS:
			return Object.assign({}, state, action.data);
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default userSettings;
