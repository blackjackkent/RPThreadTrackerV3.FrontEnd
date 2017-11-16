import { TOGGLE_SIDEBAR, TOGGLE_MOBILE_SIDEBAR, TOGGLE_NEWS_ASIDE, TOGGLE_HEADER_DROPDOWN, SET_FILTERED_CHARACTER_ID } from '../actions';

function ui(state = {}, action) {
	switch (action.type) {
		case SET_FILTERED_CHARACTER_ID:
			return Object.assign({}, state, {
				filteredCharacterId: action.data
			});
		default:
			return state;
	}
}

export default ui;
