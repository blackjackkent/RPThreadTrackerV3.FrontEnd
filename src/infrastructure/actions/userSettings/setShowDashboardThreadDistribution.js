import analytics from '../../constants/analytics';

export const SET_SHOW_DASHBOARD_THREAD_DISTRIBUTION = 'SET_SHOW_DASHBOARD_THREAD_DISTRIBUTION';
export function setShowDashboardThreadDistribution(data) {
	return {
		type: SET_SHOW_DASHBOARD_THREAD_DISTRIBUTION,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Set show dashboard thread distribution'
			}
		}
	};
}
