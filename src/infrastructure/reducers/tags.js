import {
	FETCHED_TAGS_SUCCESS,
	SUBMIT_USER_LOGOUT,
	FETCH_TAGS,
	FETCHED_TAGS_FAILURE
} from '../actions';

function tags(state = [], action) {
	switch (action.type) {
		case FETCHED_TAGS_SUCCESS:
			return action.data;
		case SUBMIT_USER_LOGOUT:
		case FETCH_TAGS:
		case FETCHED_TAGS_FAILURE:
			return [];
		default:
			return state;
	}
}

export default tags;
