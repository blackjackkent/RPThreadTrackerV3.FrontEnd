export const FETCHED_PUBLIC_THREADS_STATUS_CHUNK_FAILURE = 'FETCHED_PUBLIC_THREADS_STATUS_CHUNK_FAILURE';
export function fetchedPublicThreadsStatusChunkFailure(data) {
	return {
		type: FETCHED_PUBLIC_THREADS_STATUS_CHUNK_FAILURE,
		data
	};
}
