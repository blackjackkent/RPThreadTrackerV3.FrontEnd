import analytics from '../../constants/analytics';

export const OPEN_UPSERT_PUBLIC_VIEW_MODAL = 'OPEN_UPSERT_PUBLIC_VIEW_MODAL';
export function openUpsertPublicViewModal(data) {
	return {
		type: OPEN_UPSERT_PUBLIC_VIEW_MODAL,
		data,
		analytics: {
			func: analytics.funcs.MODALVIEW,
			path: data.id ? '/modals/update-public-view' : '/modals/add-public-view'
		}
	};
}
