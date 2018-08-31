import analytics from '../../constants/analytics';

export const UPSERT_PUBLIC_VIEW = 'UPSERT_PUBLIC_VIEW';
export function upsertPublicView(data) {
	return {
		type: UPSERT_PUBLIC_VIEW,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.PUBLIC,
				action: data.id ? 'Edited public view' : 'Added public view'
			}
		}
	};
}
export const UPSERT_PUBLIC_VIEW_FAILURE = 'UPSERT_PUBLIC_VIEW_FAILURE';
export function upsertPublicViewFailure() {
	return {
		type: UPSERT_PUBLIC_VIEW_FAILURE
	};
}
export const UPSERT_PUBLIC_VIEW_SUCCESS = 'UPSERT_PUBLIC_VIEW_SUCCESS';
export function upsertPublicViewSuccess(data) {
	return {
		type: UPSERT_PUBLIC_VIEW_SUCCESS,
		data
	};
}
