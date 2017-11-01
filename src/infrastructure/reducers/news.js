import { FETCHED_NEWS_SUCCESS } from '../actions';

function user(state = [], action) {
	switch (action.type) {
		case FETCHED_NEWS_SUCCESS:
			return action.data;
		default:
			return state;
	}
}

export default user;
