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
