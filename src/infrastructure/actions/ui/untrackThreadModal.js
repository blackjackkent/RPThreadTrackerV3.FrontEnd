export const CLOSE_UNTRACK_THREAD_MODAL = 'CLOSE_UNTRACK_THREAD_MODAL';
export function closeUntrackThreadModal() {
	return {
		type: CLOSE_UNTRACK_THREAD_MODAL
	};
}
export const OPEN_UNTRACK_THREAD_MODAL = 'OPEN_UNTRACK_THREAD_MODAL';
export function openUntrackThreadModal(data) {
	return {
		type: OPEN_UNTRACK_THREAD_MODAL,
		data
	};
}
