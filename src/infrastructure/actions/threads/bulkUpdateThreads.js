export const BULK_UPDATE_THREADS = 'BULK_UPDATE_THREADS';
export function bulkUpdateThreads(data) {
	return {
		type: BULK_UPDATE_THREADS,
		data
	};
}
