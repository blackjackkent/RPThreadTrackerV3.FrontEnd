import * as actions from '../activeTabs';

describe('setActiveHelpTab', () => {
	it('should create action with type, data, and analytics', () => {
		const tab = 'test-tab';
		const action = actions.setActiveHelpTab(tab);
		expect(action.type).toBe('SET_ACTIVE_HELP_TAB');
		expect(action.data).toBe(tab);
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/help/test-tab');
	});
});
describe('setActiveSettingsTab', () => {
	it('should create action with type, data, and analytics', () => {
		const tab = 'test-tab';
		const action = actions.setActiveSettingsTab(tab);
		expect(action.type).toBe('SET_ACTIVE_SETTINGS_TAB');
		expect(action.data).toBe(tab);
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/settings/test-tab');
	});
});
describe('setActiveToolsTab', () => {
	it('should create action with type, data, and analytics', () => {
		const tab = 'test-tab';
		const action = actions.setActiveToolsTab(tab);
		expect(action.type).toBe('SET_ACTIVE_TOOLS_TAB');
		expect(action.data).toBe(tab);
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/tools/test-tab');
	});
});
