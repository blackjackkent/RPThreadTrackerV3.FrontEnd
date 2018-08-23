import * as actions from '../toggles';

describe('toggleHeaderProfileDropdown', () => {
	it('should create action with type, data, and analytics', () => {
		const data = true;
		const action = actions.toggleHeaderProfileDropdown(data);
		expect(action.type).toBe('TOGGLE_HEADER_PROFILE_DROPDOWN');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('UI');
		expect(action.analytics.event.action).toBe('Toggled header profile dropdown');
	});
});
describe('toggleHeaderAddMenuDropdown', () => {
	it('should create action with type, data, and analytics', () => {
		const data = true;
		const action = actions.toggleHeaderAddMenuDropdown(data);
		expect(action.type).toBe('TOGGLE_HEADER_ADD_MENU_DROPDOWN');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('UI');
		expect(action.analytics.event.action).toBe('Toggled header add menu dropdown');
	});
});
describe('toggleMobileSidebar', () => {
	it('should create action with type, data, and analytics', () => {
		const data = true;
		const action = actions.toggleMobileSidebar(data);
		expect(action.type).toBe('TOGGLE_MOBILE_SIDEBAR');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('UI');
		expect(action.analytics.event.action).toBe('Toggled mobile sidebar');
	});
});
describe('toggleNewsAside', () => {
	it('should create action with type, data, and analytics', () => {
		const data = true;
		const action = actions.toggleNewsAside(data);
		expect(action.type).toBe('TOGGLE_NEWS_ASIDE');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('UI');
		expect(action.analytics.event.action).toBe('Toggled news aside');
	});
});
describe('toggleSidebar', () => {
	it('should create action with type, data, and analytics', () => {
		const data = true;
		const action = actions.toggleSidebar(data);
		expect(action.type).toBe('TOGGLE_SIDEBAR');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('UI');
		expect(action.analytics.event.action).toBe('Toggled sidebar');
	});
});
