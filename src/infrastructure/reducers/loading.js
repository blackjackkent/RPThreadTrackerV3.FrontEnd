import { SUBMIT_USER_LOGIN, SUBMIT_USER_LOGOUT, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, FETCH_ACTIVE_THREADS, FETCHED_ACTIVE_THREADS_FAILURE, FETCHED_ACTIVE_THREADS_STATUS_SUCCESS, FETCHED_ACTIVE_THREADS_STATUS_FAILURE } from '../actions';

const defaultState = {
	loginLoading: false,
	threadsLoading: false
};
function loading(state = defaultState, action) {
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
		case FETCH_ACTIVE_THREADS:
			return Object.assign({}, state, {
				threadsLoading: true
			});
		case FETCHED_ACTIVE_THREADS_FAILURE:
		case FETCHED_ACTIVE_THREADS_STATUS_SUCCESS:
		case FETCHED_ACTIVE_THREADS_STATUS_FAILURE:
			return Object.assign({}, state, {
				threadsLoading: false
			});
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default loading;
