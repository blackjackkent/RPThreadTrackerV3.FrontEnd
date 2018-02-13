import { FETCHED_NEWS_SUCCESS, SUBMIT_USER_LOGOUT } from '../actions';

function news(state = [], action) {
	switch (action.type) {
		case FETCHED_NEWS_SUCCESS:
			return action.data;
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default news;
