export const CLOSE_DELETE_PUBLIC_VIEW_MODAL = 'CLOSE_DELETE_PUBLIC_VIEW_MODAL';
export function closeDeletePublicViewModal(data) {
	return {
		type: CLOSE_DELETE_PUBLIC_VIEW_MODAL,
		data
	};
}
