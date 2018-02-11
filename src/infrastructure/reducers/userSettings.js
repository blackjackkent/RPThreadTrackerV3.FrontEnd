import { FETCHED_USER_SETTINGS_SUCCESS, UPDATED_USER_SETTINGS_SUCCESS, UPDATE_USER_SETTINGS } from '../actions';

function userSettings(state = { hasDashboardAtAGlanceHidden: false }, action) {
	switch (action.type) {
		case FETCHED_USER_SETTINGS_SUCCESS:
		case UPDATED_USER_SETTINGS_SUCCESS:
		case UPDATE_USER_SETTINGS:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}

export default userSettings;
