import { REFRESH_AUTH_TOKEN, REFRESH_AUTH_TOKEN_FAILURE, REFRESH_AUTH_TOKEN_SUCCESS, SUBMIT_USER_LOGOUT } from '../actions';

function isRefreshingAuthToken(state = false, action) {
	switch (action.type) {
		case REFRESH_AUTH_TOKEN:
			return true;
		case REFRESH_AUTH_TOKEN_FAILURE:
		case REFRESH_AUTH_TOKEN_SUCCESS:
		case SUBMIT_USER_LOGOUT:
			return false;
		default:
			return state;
	}
}

export default isRefreshingAuthToken;
