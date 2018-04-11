export const FETCH_PUBLIC_THREADS_FAILURE = 'FETCH_PUBLIC_THREADS_FAILURE';
export function fetchPublicThreadsFailure(data) {
	return {
		type: FETCH_PUBLIC_THREADS_FAILURE,
		data
	};
}
