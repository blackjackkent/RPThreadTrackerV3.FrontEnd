import { FETCHED_TAGS_SUCCESS, SUBMIT_USER_LOGOUT } from '../actions';

function tags(state = [], action) {
	switch (action.type) {
		case FETCHED_TAGS_SUCCESS:
			return action.data;
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default tags;
