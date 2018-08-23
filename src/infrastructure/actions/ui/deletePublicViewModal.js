export const CLOSE_DELETE_PUBLIC_VIEW_MODAL = 'CLOSE_DELETE_PUBLIC_VIEW_MODAL';
export function closeDeletePublicViewModal() {
	return {
		type: CLOSE_DELETE_PUBLIC_VIEW_MODAL
	};
}
export const OPEN_DELETE_PUBLIC_VIEW_MODAL = 'OPEN_DELETE_PUBLIC_VIEW_MODAL';
export function openDeletePublicViewModal(data) {
	return {
		type: OPEN_DELETE_PUBLIC_VIEW_MODAL,
		data
	};
}
