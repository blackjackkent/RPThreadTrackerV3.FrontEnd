export const OPEN_UPSERT_THREAD_MODAL = 'OPEN_UPSERT_THREAD_MODAL';
export function openUpsertThreadModal(thread) {
	return {
		type: OPEN_UPSERT_THREAD_MODAL,
		data: thread
	};
}
