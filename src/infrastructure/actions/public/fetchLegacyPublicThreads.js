export const FETCH_LEGACY_PUBLIC_THREADS = 'FETCH_LEGACY_PUBLIC_THREADS';
export function fetchLegacyPublicThreads(data) {
	return {
		type: FETCH_LEGACY_PUBLIC_THREADS,
		data
	};
}
