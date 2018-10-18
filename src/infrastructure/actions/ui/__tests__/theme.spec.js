import * as actions from '../theme';

describe('loadSiteTheme', () => {
	it('should create action with type', () => {
		const action = actions.loadSiteTheme();
		expect(action.type).toBe('LOAD_SITE_THEME');
	});
});
describe('setSiteTheme', () => {
	it('should create action with type and data', () => {
		const data = true;
		const action = actions.setSiteTheme(data);
		expect(action.type).toBe('SET_SITE_THEME');
		expect(action.data).toBe(true);
	});
});
describe('loadSiteThemeSuccess', () => {
	it('should create action with type and data', () => {
		const data = true;
		const action = actions.loadSiteThemeSuccess(data);
		expect(action.type).toBe('LOAD_SITE_THEME_SUCCESS');
		expect(action.data).toBe(true);
	});
});
