export const FETCH_ACTIVE_THREADS_STATUS = 'FETCH_ACTIVE_THREADS_STATUS';
export function fetchActiveThreadsStatus(data) {
	return {
		type: FETCH_ACTIVE_THREADS_STATUS,
		data
	};
}
export const FETCHED_ACTIVE_THREADS_STATUS_SUCCESS = 'FETCHED_ACTIVE_THREADS_STATUS_SUCCESS';
export function fetchedActiveThreadsStatusSuccess(data) {
	return {
		type: FETCHED_ACTIVE_THREADS_STATUS_SUCCESS,
		data
	};
}
export const FETCHED_ACTIVE_THREADS_STATUS_FAILURE = 'FETCHED_ACTIVE_THREADS_STATUS_FAILURE';
export function fetchedActiveThreadsStatusFailure() {
	return {
		type: FETCHED_ACTIVE_THREADS_STATUS_FAILURE
	};
}
export const FETCHED_ACTIVE_THREADS_STATUS_CHUNK_FAILURE = 'FETCHED_ACTIVE_THREADS_STATUS_CHUNK_FAILURE';
export function fetchedActiveThreadsStatusChunkFailure() {
	return {
		type: FETCHED_ACTIVE_THREADS_STATUS_CHUNK_FAILURE
	};
}
export const FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS = 'FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS';
export function fetchedActiveThreadsStatusChunkSuccess(data) {
	return {
		type: FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS,
		data
	};
}
