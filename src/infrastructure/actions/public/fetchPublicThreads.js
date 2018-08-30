export const FETCH_PUBLIC_THREADS = 'FETCH_PUBLIC_THREADS';
export function fetchPublicThreads(data) {
	return {
		type: FETCH_PUBLIC_THREADS,
		data
	};
}
export const FETCHED_PUBLIC_THREADS_FAILURE = 'FETCHED_PUBLIC_THREADS_FAILURE';
export function fetchedPublicThreadsFailure() {
	return {
		type: FETCHED_PUBLIC_THREADS_FAILURE
	};
}
export const FETCHED_PUBLIC_THREADS_SUCCESS = 'FETCHED_PUBLIC_THREADS_SUCCESS';
export function fetchedPublicThreadsSuccess(data) {
	return {
		type: FETCHED_PUBLIC_THREADS_SUCCESS,
		data
	};
}
