export const FETCHED_PUBLIC_THREADS_FAILURE = 'FETCHED_PUBLIC_THREADS_FAILURE';
export function fetchedPublicThreadsFailure(data) {
	return {
		type: FETCHED_PUBLIC_THREADS_FAILURE,
		data
	};
}
