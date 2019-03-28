import analytics from '../../constants/analytics';

export const CLOSE_BULK_UPDATE_TAG_MODAL = 'CLOSE_BULK_UPDATE_TAG_MODAL';
export function closeBulkUpdateTagModal() {
	return {
		type: CLOSE_BULK_UPDATE_TAG_MODAL
	};
}
export const OPEN_BULK_UPDATE_TAG_MODAL = 'OPEN_BULK_UPDATE_TAG_MODAL';
export function openBulkUpdateTagModal(selectedTag, updatedValue = null, shouldUpdateActiveThreads = false, shouldUpdateArchivedThreads = false) {
	return {
		type: OPEN_BULK_UPDATE_TAG_MODAL,
		data: {
			selectedTag,
			updatedValue,
			shouldUpdateActiveThreads,
			shouldUpdateArchivedThreads
		},
		analytics: {
			func: analytics.funcs.MODALVIEW,
			path: '/modals/bulk-update-tag'
		}
	};
}
