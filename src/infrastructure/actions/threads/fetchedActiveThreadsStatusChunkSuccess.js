export const FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS = 'FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS';
export function fetchedActiveThreadsStatusChunkSuccess(data) {
	return {
		type: FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS,
		data
	};
}
