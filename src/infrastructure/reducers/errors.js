import {
	SUBMIT_USER_LOGIN,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	SUBMIT_USER_LOGOUT,
	USER_REGISTRATION_SUCCESS,
	SUBMIT_USER_REGISTRATION,
	USER_REGISTRATION_FAILURE,
	USER_FORGOT_PASSWORD_SUCCESS,
	USER_FORGOT_PASSWORD_FAILURE,
	SUBMIT_USER_FORGOT_PASSWORD,
	SUBMIT_USER_RESET_PASSWORD,
	USER_RESET_PASSWORD_FAILURE,
	USER_RESET_PASSWORD_SUCCESS
} from '../actions';

const defaultState = {
	loginError: null,
	registrationErrors: [],
	forgotPasswordError: null,
	resetPasswordErrors: []
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
		case USER_FORGOT_PASSWORD_SUCCESS:
		case SUBMIT_USER_FORGOT_PASSWORD:
			return Object.assign({}, state, {
				forgotPasswordError: null
			});
		case USER_RESET_PASSWORD_SUCCESS:
		case SUBMIT_USER_RESET_PASSWORD:
			return Object.assign({}, state, {
				resetPasswordErrors: []
			});
		case USER_LOGIN_FAILURE:
			return Object.assign({}, state, {
				loginError: action.data
			});
		case USER_REGISTRATION_FAILURE:
			return Object.assign({}, state, {
				registrationErrors: action.data
			});
		case USER_FORGOT_PASSWORD_FAILURE:
			return Object.assign({}, state, {
				forgotPasswordError: action.data
			});
		case USER_RESET_PASSWORD_FAILURE:
			return Object.assign({}, state, {
				resetPasswordError: action.data
			});
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default errors;
