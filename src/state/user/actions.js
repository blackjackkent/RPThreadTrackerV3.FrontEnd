import axios from 'axios';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const INVALIDATE_USER = 'INVALIDATE_USER';
export const TOGGLE_HAS_DASHBOARD_AT_A_GLANCE_HIDDEN = 'TOGGLE_HAS_DASHBOARD_AT_A_GLANCE_HIDDEN';

export function invalidateUser() {
	return {
		type: INVALIDATE_USER
	};
}

function receiveUser(json) {
	return {
		type: RECEIVE_USER,
		data: json
	};
}

function requestUser() {
	return {
		type: REQUEST_USER
	};
}

function shouldFetchUser(state) {
	const { user } = state;
	if (!user || !user.id) {
		return true;
	}
	return false;
}

function fetchUser() {
	return (dispatch) => {
		dispatch(requestUser());
		return axios.get('http://localhost:3001/user')
			.then(response => response.data)
			.then(json => dispatch(receiveUser(json)));
	};
}

export function fetchUserIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchUser(getState())) {
			return dispatch(fetchUser());
		}
		return null;
	};
}

export function toggleHasDashboardAtAGlanceHidden() {
	return (dispatch, getState) => {
		if (shouldFetchUser(getState())) {
			return dispatch(fetchUser());
		}
		return null;
	};
}
