import { FETCH_PUBLIC_VIEWS, FETCHED_PUBLIC_VIEWS_FAILURE, FETCHED_PUBLIC_VIEWS_SUCCESS, SUBMIT_USER_LOGOUT } from '../actions';

function publicViews(state = [], action) {
	switch (action.type) {
		case FETCH_PUBLIC_VIEWS:
		case FETCHED_PUBLIC_VIEWS_FAILURE:
		case SUBMIT_USER_LOGOUT:
			return [];
		case FETCHED_PUBLIC_VIEWS_SUCCESS:
			return action.data;
		default:
			return state;
	}
}

export default publicViews;
