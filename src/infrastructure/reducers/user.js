import { FETCHED_USER_SUCCESS } from '../actions';

function user(state = {}, action) {
	switch (action.type) {
		case FETCHED_USER_SUCCESS:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}

export default user;
