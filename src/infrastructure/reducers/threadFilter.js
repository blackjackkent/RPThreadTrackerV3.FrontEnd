import { SET_FILTERED_CHARACTER_ID } from '../actions';

function ui(state = {}, action) {
	switch (action.type) {
		case SET_FILTERED_CHARACTER_ID:
			return Object.assign({}, state, {
				filteredCharacterId: parseInt(action.data, 10)
			});
		default:
			return state;
	}
}

export default ui;
