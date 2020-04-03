import {
	FETCH_CHARACTERS,
	FETCHED_CHARACTERS_SUCCESS,
	FETCHED_CHARACTERS_FAILURE,
	SUBMIT_USER_LOGOUT
} from '../actions';

function characters(state = [], action) {
	switch (action.type) {
		case FETCH_CHARACTERS:
		case FETCHED_CHARACTERS_FAILURE:
			return [];
		case FETCHED_CHARACTERS_SUCCESS:
			return action.data;
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default characters;
