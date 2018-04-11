export const FETCH_PUBLIC_THREADS_SUCCESS = 'FETCH_PUBLIC_THREADS_SUCCESS';
export function fetchPublicThreadsSuccess(data) {
	return {
		type: FETCH_PUBLIC_THREADS_SUCCESS,
		data
	};
}
