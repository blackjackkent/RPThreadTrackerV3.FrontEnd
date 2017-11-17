export const FETCHED_ACTIVE_THREADS_SUCCESS = 'FETCHED_ACTIVE_THREADS_SUCCESS';
export function fetchedActiveThreadsSuccess(data) {
	return {
		type: FETCHED_ACTIVE_THREADS_SUCCESS,
		data
	};
}
