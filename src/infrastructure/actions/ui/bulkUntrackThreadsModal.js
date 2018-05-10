export const CLOSE_BULK_UNTRACK_THREADS_MODAL = 'CLOSE_BULK_UNTRACK_THREADS_MODAL';
export function closeBulkUntrackThreadsModal() {
	return {
		type: CLOSE_BULK_UNTRACK_THREADS_MODAL
	};
}
export const OPEN_BULK_UNTRACK_THREADS_MODAL = 'OPEN_BULK_UNTRACK_THREADS_MODAL';
export function openBulkUntrackThreadsModal(data) {
	return {
		type: OPEN_BULK_UNTRACK_THREADS_MODAL,
		data
	};
}
