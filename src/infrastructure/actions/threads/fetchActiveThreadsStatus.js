export const FETCH_ACTIVE_THREADS_STATUS = 'FETCH_ACTIVE_THREADS_STATUS';
export function fetchActiveThreadsStatus(data) {
	return {
		type: FETCH_ACTIVE_THREADS_STATUS,
		data
	};
}
