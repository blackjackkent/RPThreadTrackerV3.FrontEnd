export const FETCH_PUBLIC_THREADS_STATUS = 'FETCH_PUBLIC_THREADS_STATUS';
export function fetchPublicThreadsStatus(data) {
	return {
		type: FETCH_PUBLIC_THREADS_STATUS,
		data
	};
}
export const FETCHED_PUBLIC_THREADS_STATUS_FAILURE = 'FETCHED_PUBLIC_THREADS_STATUS_FAILURE';
export function fetchedPublicThreadsStatusFailure() {
	return {
		type: FETCHED_PUBLIC_THREADS_STATUS_FAILURE
	};
}
export const FETCHED_PUBLIC_THREADS_STATUS_SUCCESS = 'FETCHED_PUBLIC_THREADS_STATUS_SUCCESS';
export function fetchedPublicThreadsStatusSuccess() {
	return {
		type: FETCHED_PUBLIC_THREADS_STATUS_SUCCESS
	};
}
export const FETCHED_PUBLIC_THREADS_STATUS_CHUNK_FAILURE =
	'FETCHED_PUBLIC_THREADS_STATUS_CHUNK_FAILURE';
export function fetchedPublicThreadsStatusChunkFailure() {
	return {
		type: FETCHED_PUBLIC_THREADS_STATUS_CHUNK_FAILURE
	};
}
export const FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS =
	'FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS';
export function fetchedPublicThreadsStatusChunkSuccess(data) {
	return {
		type: FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS,
		data
	};
}
