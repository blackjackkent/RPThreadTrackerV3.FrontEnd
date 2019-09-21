import * as actions from '../sidebar';

describe('loadSidebarOpen', () => {
	it('should create action with type', () => {
		const action = actions.loadSidebarOpen();
		expect(action.type).toBe('LOAD_SIDEBAR_OPEN');
	});
});
describe('setSidebarOpen', () => {
	it('should create action with type, data, and analytics', () => {
		const data = true;
		const action = actions.setSidebarOpen(data);
		expect(action.type).toBe('SET_SIDEBAR_OPEN');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('UI');
		expect(action.analytics.event.action).toBe('Toggled sidebar');
	});
});
describe('loadSidebarOpenSuccess', () => {
	it('should create action with type and data', () => {
		const data = true;
		const action = actions.loadSidebarOpenSuccess(data);
		expect(action.type).toBe('LOAD_SIDEBAR_OPEN_SUCCESS');
		expect(action.data).toBe(true);
	});
});
