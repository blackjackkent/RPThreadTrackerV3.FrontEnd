import analytics from '../../constants/analytics';

export const DELETE_PUBLIC_VIEW = 'DELETE_PUBLIC_VIEW';
export function deletePublicView(data) {
	return {
		type: DELETE_PUBLIC_VIEW,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.PUBLIC,
				action: 'Deleted public view'
			}
		}
	};
}
export const DELETE_PUBLIC_VIEW_FAILURE = 'DELETE_PUBLIC_VIEW_FAILURE';
export function deletePublicViewFailure() {
	return {
		type: DELETE_PUBLIC_VIEW_FAILURE
	};
}
export const DELETE_PUBLIC_VIEW_SUCCESS = 'DELETE_PUBLIC_VIEW_SUCCESS';
export function deletePublicViewSuccess() {
	return {
		type: DELETE_PUBLIC_VIEW_SUCCESS
	};
}
