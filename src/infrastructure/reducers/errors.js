import {
	SUBMIT_USER_LOGIN,
	SUBMIT_USER_LOGIN_SUCCESS,
	SUBMIT_USER_LOGIN_FAILURE,
	SUBMIT_USER_LOGOUT,
	SUBMIT_USER_REGISTRATION_SUCCESS,
	SUBMIT_USER_REGISTRATION,
	SUBMIT_USER_REGISTRATION_FAILURE,
	SUBMIT_USER_FORGOT_PASSWORD_SUCCESS,
	SUBMIT_USER_FORGOT_PASSWORD_FAILURE,
	SUBMIT_USER_FORGOT_PASSWORD,
	SUBMIT_USER_RESET_PASSWORD,
	SUBMIT_USER_RESET_PASSWORD_FAILURE,
	SUBMIT_USER_RESET_PASSWORD_SUCCESS
} from '../actions';

const defaultState = {
	loginError: null,
	registrationErrors: [],
	forgotPasswordError: null,
	resetPasswordErrors: []
};

function errors(state = defaultState, action) {
	switch (action.type) {
		case SUBMIT_USER_LOGIN_SUCCESS:
		case SUBMIT_USER_LOGIN:
			return Object.assign({}, state, {
				loginError: null
			});
		case SUBMIT_USER_REGISTRATION_SUCCESS:
		case SUBMIT_USER_REGISTRATION:
			return Object.assign({}, state, {
				registrationErrors: []
			});
		case SUBMIT_USER_FORGOT_PASSWORD_SUCCESS:
		case SUBMIT_USER_FORGOT_PASSWORD:
			return Object.assign({}, state, {
				forgotPasswordError: null
			});
		case SUBMIT_USER_RESET_PASSWORD_SUCCESS:
		case SUBMIT_USER_RESET_PASSWORD:
			return Object.assign({}, state, {
				resetPasswordErrors: []
			});
		case SUBMIT_USER_LOGIN_FAILURE:
			return Object.assign({}, state, {
				loginError: action.data
			});
		case SUBMIT_USER_REGISTRATION_FAILURE:
			return Object.assign({}, state, {
				registrationErrors: action.data
			});
		case SUBMIT_USER_FORGOT_PASSWORD_FAILURE:
			return Object.assign({}, state, {
				forgotPasswordError: action.data
			});
		case SUBMIT_USER_RESET_PASSWORD_FAILURE:
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
