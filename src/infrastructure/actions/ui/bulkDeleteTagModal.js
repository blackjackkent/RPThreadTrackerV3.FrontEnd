import analytics from '../../constants/analytics';

export const CLOSE_BULK_DELETE_TAG_MODAL = 'CLOSE_BULK_DELETE_TAG_MODAL';
export function closeBulkDeleteTagModal() {
	return {
		type: CLOSE_BULK_DELETE_TAG_MODAL
	};
}
export const OPEN_BULK_DELETE_TAG_MODAL = 'OPEN_BULK_DELETE_TAG_MODAL';
export function openBulkDeleteTagModal(selectedTag) {
	return {
		type: OPEN_BULK_DELETE_TAG_MODAL,
		data: {
			selectedTag
		},
		analytics: {
			func: analytics.funcs.MODALVIEW,
			path: '/modals/bulk-delete-tag'
		}
	};
}
