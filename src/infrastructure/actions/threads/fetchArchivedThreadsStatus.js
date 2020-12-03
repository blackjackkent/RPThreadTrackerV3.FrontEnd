export const FETCH_ARCHIVED_THREADS_STATUS = 'FETCH_ARCHIVED_THREADS_STATUS';
export function fetchArchivedThreadsStatus(data) {
	return {
		type: FETCH_ARCHIVED_THREADS_STATUS,
		data
	};
}
export const FETCHED_ARCHIVED_THREADS_STATUS_SUCCESS = 'FETCHED_ARCHIVED_THREADS_STATUS_SUCCESS';
export function fetchedArchivedThreadsStatusSuccess(data) {
	return {
		type: FETCHED_ARCHIVED_THREADS_STATUS_SUCCESS,
		data
	};
}
export const FETCHED_ARCHIVED_THREADS_STATUS_FAILURE = 'FETCHED_ARCHIVED_THREADS_STATUS_FAILURE';
export function fetchedArchivedThreadsStatusFailure() {
	return {
		type: FETCHED_ARCHIVED_THREADS_STATUS_FAILURE
	};
}
export const FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_FAILURE =
	'FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_FAILURE';
export function fetchedArchivedThreadsStatusChunkFailure() {
	return {
		type: FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_FAILURE
	};
}
export const FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_SUCCESS =
	'FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_SUCCESS';
export function fetchedArchivedThreadsStatusChunkSuccess(data) {
	return {
		type: FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_SUCCESS,
		data
	};
}
