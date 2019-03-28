export const FETCH_ACTIVE_THREADS = 'FETCH_ACTIVE_THREADS';
export function fetchActiveThreads(shouldSkipStatusFetch = false) {
	return {
		type: FETCH_ACTIVE_THREADS,
		data: {
			shouldSkipStatusFetch
		}
	};
}
export const FETCHED_ACTIVE_THREADS_SUCCESS = 'FETCHED_ACTIVE_THREADS_SUCCESS';
export function fetchedActiveThreadsSuccess(data) {
	return {
		type: FETCHED_ACTIVE_THREADS_SUCCESS,
		data
	};
}
export const FETCHED_ACTIVE_THREADS_FAILURE = 'FETCHED_ACTIVE_THREADS_FAILURE';
export function fetchedActiveThreadsFailure() {
	return {
		type: FETCHED_ACTIVE_THREADS_FAILURE
	};
}
