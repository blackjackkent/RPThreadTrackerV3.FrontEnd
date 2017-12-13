import { SUBMIT_USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../actions';

function errors(state = {
	loginLoading: false
}, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
		case USER_LOGIN_FAILURE:
			return Object.assign({}, state, {
				loginLoading: false
			});
		case SUBMIT_USER_LOGIN:
			return Object.assign({}, state, {
				loginLoading: true
			});
		default:
			return state;
	}
}

export default errors;
