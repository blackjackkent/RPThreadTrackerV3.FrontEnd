export const FETCHED_USER_SUCCESS = 'FETCHED_USER_SUCCESS';
export function fetchedUserSuccess(data) {
	return {
		type: FETCHED_USER_SUCCESS,
		data
	};
}
