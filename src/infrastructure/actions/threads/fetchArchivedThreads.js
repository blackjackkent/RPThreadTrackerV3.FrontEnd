export const FETCH_ARCHIVED_THREADS = 'FETCH_ARCHIVED_THREADS';
export function fetchArchivedThreads() {
	return {
		type: FETCH_ARCHIVED_THREADS
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
