import { SUBMIT_USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, SUBMIT_USER_LOGOUT } from '../actions';

const defaultState = {
	loginError: null
};

function errors(state = defaultState, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
		case SUBMIT_USER_LOGIN:
			return Object.assign({}, state, {
				loginError: null
			});
		case USER_LOGIN_FAILURE:
			return Object.assign({}, state, {
				loginError: action.data
			});
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default errors;
