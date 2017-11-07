import { FETCHED_USER_SETTINGS_SUCCESS, SET_HAS_DASHBOARD_AT_A_GLANCE_HIDDEN, UPDATED_USER_SETTINGS_SUCCESS } from '../actions';

function userSettings(state = { hasDashboardAtAGlanceHidden: false }, action) {
	switch (action.type) {
		case FETCHED_USER_SETTINGS_SUCCESS:
			return Object.assign({}, state, action.data);
		case SET_HAS_DASHBOARD_AT_A_GLANCE_HIDDEN:
			return Object.assign({}, state, {
				hasDashboardAtAGlanceHidden: action.data
			});
		case UPDATED_USER_SETTINGS_SUCCESS:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}

export default userSettings;
