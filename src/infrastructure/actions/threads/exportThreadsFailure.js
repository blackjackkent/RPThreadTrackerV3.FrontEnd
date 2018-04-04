export const EXPORT_THREADS_FAILURE = 'EXPORT_THREADS_FAILURE';
export function exportThreadsFailure(data) {
	return {
		type: EXPORT_THREADS_FAILURE,
		data
	};
}
