export const FETCH_PUBLIC_THREADS_STATUS = 'FETCH_PUBLIC_THREADS_STATUS';
export function fetchPublicThreadsStatus(data) {
	return {
		type: FETCH_PUBLIC_THREADS_STATUS,
		data
	};
}
