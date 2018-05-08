export const DELETE_PUBLIC_VIEW_SUCCESS = 'DELETE_PUBLIC_VIEW_SUCCESS';
export function deletePublicViewSuccess(data) {
	return {
		type: DELETE_PUBLIC_VIEW_SUCCESS,
		data
	};
}
