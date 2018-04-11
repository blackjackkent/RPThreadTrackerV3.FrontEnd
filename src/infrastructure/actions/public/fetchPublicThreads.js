export const FETCH_PUBLIC_THREADS = 'FETCH_PUBLIC_THREADS';
export function fetchPublicThreads(data) {
	return {
		type: FETCH_PUBLIC_THREADS,
		data
	};
}
