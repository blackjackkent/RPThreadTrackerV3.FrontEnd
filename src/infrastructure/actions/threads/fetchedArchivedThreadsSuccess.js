export const FETCHED_ARCHIVED_THREADS_SUCCESS = 'FETCHED_ARCHIVED_THREADS_SUCCESS';
export function fetchedArchivedThreadsSuccess(data) {
	return {
		type: FETCHED_ARCHIVED_THREADS_SUCCESS,
		data
	};
}
