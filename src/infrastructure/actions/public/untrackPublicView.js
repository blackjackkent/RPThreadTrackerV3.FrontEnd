import analytics from '../../constants/analytics';

export const UNTRACK_PUBLIC_VIEW = 'UNTRACK_PUBLIC_VIEW';
export function untrackPublicView(data) {
	return {
		type: UNTRACK_PUBLIC_VIEW,
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
