export const FETCHED_ACTIVE_THREADS_STATUS_SUCCESS = 'FETCHED_ACTIVE_THREADS_STATUS_SUCCESS';
export function fetchedActiveThreadsStatusSuccess(data) {
	return {
		type: FETCHED_ACTIVE_THREADS_STATUS_SUCCESS,
		data
	};
}
