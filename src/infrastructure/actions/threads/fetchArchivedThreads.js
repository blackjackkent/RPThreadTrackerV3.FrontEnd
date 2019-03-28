export const FETCH_ARCHIVED_THREADS = 'FETCH_ARCHIVED_THREADS';
export function fetchArchivedThreads(shouldSkipStatusFetch = false) {
	return {
		type: FETCH_ARCHIVED_THREADS,
		data: {
			shouldSkipStatusFetch
		}
	};
}
export const FETCHED_ARCHIVED_THREADS_FAILURE = 'FETCHED_ARCHIVED_THREADS_FAILURE';
export function fetchedArchivedThreadsFailure() {
	return {
		type: FETCHED_ARCHIVED_THREADS_FAILURE
	};
}
export const FETCHED_ARCHIVED_THREADS_SUCCESS = 'FETCHED_ARCHIVED_THREADS_SUCCESS';
export function fetchedArchivedThreadsSuccess(data) {
	return {
		type: FETCHED_ARCHIVED_THREADS_SUCCESS,
		data
	};
}
