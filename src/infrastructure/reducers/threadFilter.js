import { SET_FILTERED_TAG, SUBMIT_USER_LOGOUT } from '../actions';

const defaultState = {};

function threadFilter(state = defaultState, action) {
	switch (action.type) {
		case SET_FILTERED_TAG:
			return Object.assign({}, state, {
				filteredTag: action.data
			});
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default threadFilter;
