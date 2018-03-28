import {
	FETCHED_ACTIVE_THREADS_FAILURE,
	FETCHED_ACTIVE_THREADS_STATUS_FAILURE,
	FETCHED_ACTIVE_THREADS_STATUS_SUCCESS,
	FETCHED_ARCHIVED_THREADS_FAILURE,
	FETCHED_ARCHIVED_THREADS_SUCCESS,
	FETCH_ACTIVE_THREADS,
	FETCH_ARCHIVED_THREADS,
	SUBMIT_USER_LOGIN,
	SUBMIT_USER_LOGOUT,
	SUBMIT_USER_REGISTRATION,
	USER_LOGIN_FAILURE,
	USER_LOGIN_SUCCESS,
	USER_REGISTRATION_FAILURE,
	USER_REGISTRATION_SUCCESS
} from '../actions';

const defaultState = {
	loginLoading: false,
	registrationLoading: false,
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
		case USER_REGISTRATION_FAILURE:
		case USER_REGISTRATION_SUCCESS:
			return Object.assign({}, state, {
				registrationLoading: false
			});
		case SUBMIT_USER_REGISTRATION:
			return Object.assign({}, state, {
				registrationLoading: true
			});
		case FETCH_ACTIVE_THREADS:
		case FETCH_ARCHIVED_THREADS:
			return Object.assign({}, state, {
				threadsLoading: true
			});
		case FETCHED_ACTIVE_THREADS_FAILURE:
		case FETCHED_ACTIVE_THREADS_STATUS_SUCCESS:
		case FETCHED_ACTIVE_THREADS_STATUS_FAILURE:
		case FETCHED_ARCHIVED_THREADS_FAILURE:
		case FETCHED_ARCHIVED_THREADS_SUCCESS:
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
