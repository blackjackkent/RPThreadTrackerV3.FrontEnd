import { FETCHED_USER_SUCCESS } from '../actions';

function userSettings(state = {}, action) {
	switch (action.type) {
		case FETCHED_USER_SUCCESS:
			return Object.assign({}, state, action.data.settings);
		default:
			return state;
	}
}

export default userSettings;
