import { FETCHED_USER_SUCCESS, SUBMIT_USER_LOGOUT } from '../actions';

const defaultState = {
	id: ''
};
function user(state = defaultState, action) {
	switch (action.type) {
		case FETCHED_USER_SUCCESS:
			return Object.assign({}, state, action.data);
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default user;
