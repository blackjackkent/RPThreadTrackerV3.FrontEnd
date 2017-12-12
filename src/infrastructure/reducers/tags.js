import { FETCHED_TAGS_SUCCESS } from '../actions';

function tags(state = [], action) {
	switch (action.type) {
		case FETCHED_TAGS_SUCCESS:
			return action.data;
		default:
			return state;
	}
}

export default tags;
