export const EXPORT_THREADS = 'EXPORT_THREADS';
export function exportThreads(data) {
	return {
		type: EXPORT_THREADS,
		data
	};
}
