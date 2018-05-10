export const FETCH_USER = 'FETCH_USER';
export function fetchUser() {
	return {
		type: FETCH_USER
	};
}
export const FETCHED_USER_FAILURE = 'FETCHED_USER_FAILURE';
export function fetchedUserFailure() {
	return {
		type: FETCHED_USER_FAILURE
	};
}
export const FETCHED_USER_SUCCESS = 'FETCHED_USER_SUCCESS';
export function fetchedUserSuccess(data) {
	return {
		type: FETCHED_USER_SUCCESS,
		data
	};
}
