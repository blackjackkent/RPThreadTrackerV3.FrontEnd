export const DELETE_PUBLIC_VIEW_FAILURE = 'DELETE_PUBLIC_VIEW_FAILURE';
export function deletePublicViewFailure(data) {
	return {
		type: DELETE_PUBLIC_VIEW_FAILURE,
		data
	};
}
