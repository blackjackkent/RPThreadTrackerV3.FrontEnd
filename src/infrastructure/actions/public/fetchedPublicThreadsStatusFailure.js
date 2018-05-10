export const FETCHED_PUBLIC_THREADS_STATUS_FAILURE = 'FETCHED_PUBLIC_THREADS_STATUS_FAILURE';
export function fetchedPublicThreadsStatusFailure(data) {
	return {
		type: FETCHED_PUBLIC_THREADS_STATUS_FAILURE,
		data
	};
}
