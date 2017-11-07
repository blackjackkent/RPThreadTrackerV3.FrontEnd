export const FETCHED_THREADS_SUCCESS = 'FETCHED_THREADS_SUCCESS';
export function fetchedThreadsSuccess(data) {
	return {
		type: FETCHED_THREADS_SUCCESS,
		data
	};
}
