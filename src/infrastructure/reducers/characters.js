import { FETCHED_CHARACTERS_SUCCESS } from '../actions';

function characters(state = [], action) {
	switch (action.type) {
		case FETCHED_CHARACTERS_SUCCESS:
			return action.data;
		default:
			return state;
	}
}

export default characters;
