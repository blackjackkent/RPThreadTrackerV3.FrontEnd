import { FETCHED_CHARACTERS_SUCCESS, SUBMIT_USER_LOGOUT } from '../actions';

function characters(state = [], action) {
	switch (action.type) {
		case FETCHED_CHARACTERS_SUCCESS:
			return action.data;
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default characters;
