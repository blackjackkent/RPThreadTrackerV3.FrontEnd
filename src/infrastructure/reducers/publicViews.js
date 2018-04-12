import { FETCH_PUBLIC_VIEWS, FETCHED_PUBLIC_VIEWS_FAILURE, FETCHED_PUBLIC_VIEWS_SUCCESS } from '../actions';

function publicThreads(state = [], action) {
	switch (action.type) {
		case FETCH_PUBLIC_VIEWS:
		case FETCHED_PUBLIC_VIEWS_FAILURE:
			return [];
		case FETCHED_PUBLIC_VIEWS_SUCCESS:
			return action.data.threads;
		default:
			return state;
	}
}

export default publicThreads;
