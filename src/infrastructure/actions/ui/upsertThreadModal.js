import analytics from '../../constants/analytics';

export const CLOSE_UPSERT_THREAD_MODAL = 'CLOSE_UPSERT_THREAD_MODAL';
export function closeUpsertThreadModal(thread) {
	return {
		type: CLOSE_UPSERT_THREAD_MODAL,
		thread
	};
}
export const OPEN_UPSERT_THREAD_MODAL = 'OPEN_UPSERT_THREAD_MODAL';
export function openUpsertThreadModal(thread) {
	return {
		type: OPEN_UPSERT_THREAD_MODAL,
		data: thread,
		analytics: {
			func: analytics.funcs.MODALVIEW,
			path: thread && thread.threadId ? '/modals/update-thread' : '/modals/add-thread'
		}
	};
}
