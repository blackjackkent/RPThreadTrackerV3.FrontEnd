import { SUBMIT_USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, SUBMIT_USER_LOGOUT, USER_REGISTRATION_SUCCESS, SUBMIT_USER_REGISTRATION, USER_REGISTRATION_FAILURE } from '../actions';

const defaultState = {
	loginError: null,
	registrationErrors: []
};

function errors(state = defaultState, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
		case SUBMIT_USER_LOGIN:
			return Object.assign({}, state, {
				loginError: null
			});
		case USER_REGISTRATION_SUCCESS:
		case SUBMIT_USER_REGISTRATION:
			return Object.assign({}, state, {
				registrationErrors: []
			});
		case USER_LOGIN_FAILURE:
			return Object.assign({}, state, {
				loginError: action.data
			});
		case USER_REGISTRATION_FAILURE:
			return Object.assign({}, state, {
				registrationErrors: action.data
			});
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default errors;
