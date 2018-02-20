export const BULK_UNTRACK_THREADS = 'BULK_UNTRACK_THREADS';
export function bulkUntrackThreads(data) {
	return {
		type: BULK_UNTRACK_THREADS,
		data
	};
}
