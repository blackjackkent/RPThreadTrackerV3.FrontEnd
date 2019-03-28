import analytics from '../../constants/analytics';

export const BULK_DELETE_TAG = 'BULK_DELETE_TAG';
export function bulkDeleteTag(data) {
	return {
		type: BULK_DELETE_TAG,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.THREAD,
				action: 'Bulk deleted tag'
			}
		}
	};
}
export const BULK_DELETE_TAG_FAILURE = 'BULK_DELETE_TAG_FAILURE';
export function bulkDeleteTagFailure() {
	return {
		type: BULK_DELETE_TAG_FAILURE
	};
}
export const BULK_DELETE_TAG_SUCCESS = 'BULK_DELETE_TAG_SUCCESS';
export function bulkDeleteTagSuccess() {
	return {
		type: BULK_DELETE_TAG_SUCCESS
	};
}
