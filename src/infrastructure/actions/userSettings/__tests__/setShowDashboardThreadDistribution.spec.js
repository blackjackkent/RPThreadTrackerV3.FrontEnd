import * as actions from '../setShowDashboardThreadDistribution';

describe('setShowDashboardThreadDistribution', () => {
	it('should create action with type, data, and analytics', () => {
		const data = true;
		const action = actions.setShowDashboardThreadDistribution(data);
		expect(action.type).toBe('SET_SHOW_DASHBOARD_THREAD_DISTRIBUTION');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Set show dashboard thread distribution');
	});
});
