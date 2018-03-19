import { SET_FILTERED_CHARACTER_ID, SET_FILTERED_TAG, SUBMIT_USER_LOGOUT } from '../actions';

function threadFilter(state = {}, action) {
	switch (action.type) {
		case SET_FILTERED_CHARACTER_ID:
			return Object.assign({}, state, {
				filteredCharacterId: parseInt(action.data, 10)
			});
		case SET_FILTERED_TAG:
			return Object.assign({}, state, {
				filteredTag: action.data
			});
		case SUBMIT_USER_LOGOUT:
			return {};
		default:
			return state;
	}
}

export default threadFilter;
