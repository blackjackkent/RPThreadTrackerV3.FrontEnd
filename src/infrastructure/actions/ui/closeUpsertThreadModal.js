export const CLOSE_UPSERT_THREAD_MODAL = 'CLOSE_UPSERT_THREAD_MODAL';
export function closeUpsertThreadModal(thread) {
	return {
		type: CLOSE_UPSERT_THREAD_MODAL,
		thread
	};
}
