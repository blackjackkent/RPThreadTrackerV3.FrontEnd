import { SET_FILTERED_CHARACTER_ID, SET_FILTERED_TAG } from '../actions';

function ui(state = {}, action) {
	switch (action.type) {
		case SET_FILTERED_CHARACTER_ID:
			return Object.assign({}, state, {
				filteredCharacterId: parseInt(action.data, 10)
			});
		case SET_FILTERED_TAG:
			return Object.assign({}, state, {
				filteredTag: action.data
			});
		default:
			return state;
	}
}

export default ui;
