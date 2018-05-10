export const FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS = 'FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS';
export function fetchedPublicThreadsStatusChunkSuccess(data) {
	return {
		type: FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS,
		data
	};
}
