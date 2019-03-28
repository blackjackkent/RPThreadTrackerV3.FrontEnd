import analytics from '../../constants/analytics';

export const BULK_UPDATE_TAG = 'BULK_UPDATE_TAG';
export function bulkUpdateTag(data) {
	return {
		type: BULK_UPDATE_TAG,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.THREAD,
				action: 'Bulk updated tag'
			}
		}
	};
}
export const BULK_UPDATE_TAG_FAILURE = 'BULK_UPDATE_TAG_FAILURE';
export function bulkUpdateTagFailure() {
	return {
		type: BULK_UPDATE_TAG_FAILURE
	};
}
export const BULK_UPDATE_TAG_SUCCESS = 'BULK_UPDATE_TAG_SUCCESS';
export function bulkUpdateTagSuccess() {
	return {
		type: BULK_UPDATE_TAG_SUCCESS
	};
}
