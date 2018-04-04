export const EXPORT_THREADS_SUCCESS = 'EXPORT_THREADS_SUCCESS';
export function exportThreadsSuccess(data) {
	return {
		type: EXPORT_THREADS_SUCCESS,
		data
	};
}
