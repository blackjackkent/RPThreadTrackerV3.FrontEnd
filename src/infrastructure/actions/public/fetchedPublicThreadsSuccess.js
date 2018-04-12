export const FETCHED_PUBLIC_THREADS_SUCCESS = 'FETCHED_PUBLIC_THREADS_SUCCESS';
export function fetchedPublicThreadsSuccess(data) {
	return {
		type: FETCHED_PUBLIC_THREADS_SUCCESS,
		data
	};
}
