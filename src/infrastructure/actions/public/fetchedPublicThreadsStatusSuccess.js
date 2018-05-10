export const FETCHED_PUBLIC_THREADS_STATUS_SUCCESS = 'FETCHED_PUBLIC_THREADS_STATUS_SUCCESS';
export function fetchedPublicThreadsStatusSuccess(data) {
	return {
		type: FETCHED_PUBLIC_THREADS_STATUS_SUCCESS,
		data
	};
}
