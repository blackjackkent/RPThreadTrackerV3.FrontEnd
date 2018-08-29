import userSettings from '../userSettings';
import * as actions from '../../actions';

const getState = overrides => ({
	showDashboardThreadDistribution: false,
	...overrides
});

describe('action handling', () => {
	it('should set initial state', () => {
		const result = userSettings(undefined, {});
		expect(result).toEqual(getState());
	});
	it('should handle FETCHED_USER_SETTINGS_SUCCESS when skipping view update', () => {
		const action = {
			type: actions.FETCHED_USER_SETTINGS_SUCCESS,
			shouldSkipViewUpdate: true,
			data: { settingsId: '12345', showDashboardThreadDistribution: false }
		};
		const result = userSettings(getState(), action);
		expect(result).toEqual(getState());
	});
	it('should handle FETCHED_USER_SETTINGS_SUCCESS when not skipping view update', () => {
		const action = {
			type: actions.FETCHED_USER_SETTINGS_SUCCESS,
			data: { settingsId: '12345', showDashboardThreadDistribution: false }
		};
		const result = userSettings(getState(), action);
		expect(result).toEqual({ settingsId: '12345', showDashboardThreadDistribution: false });
	});
	it('should handle UPDATED_USER_SETTINGS_SUCCESS when skipping view update', () => {
		const action = {
			type: actions.UPDATED_USER_SETTINGS_SUCCESS,
			shouldSkipViewUpdate: true,
			data: { settingsId: '12345', showDashboardThreadDistribution: false }
		};
		const result = userSettings(getState(), action);
		expect(result).toEqual(getState());
	});
	it('should handle UPDATED_USER_SETTINGS_SUCCESS when not skipping view update', () => {
		const action = {
			type: actions.UPDATED_USER_SETTINGS_SUCCESS,
			data: { settingsId: '12345', showDashboardThreadDistribution: false }
		};
		const result = userSettings(getState(), action);
		expect(result).toEqual({ settingsId: '12345', showDashboardThreadDistribution: false });
	});
	it('should handle UPDATE_USER_SETTINGS when skipping view update', () => {
		const action = {
			type: actions.UPDATE_USER_SETTINGS,
			shouldSkipViewUpdate: true,
			data: { settingsId: '12345', showDashboardThreadDistribution: false }
		};
		const result = userSettings(getState(), action);
		expect(result).toEqual(getState());
	});
	it('should handle UPDATE_USER_SETTINGS when not skipping view update', () => {
		const action = {
			type: actions.UPDATE_USER_SETTINGS,
			data: { settingsId: '12345', showDashboardThreadDistribution: false }
		};
		const result = userSettings(getState(), action);
		expect(result).toEqual({ settingsId: '12345', showDashboardThreadDistribution: false });
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = userSettings({ settingsId: '12345', showDashboardThreadDistribution: false }, action);
		expect(result).toEqual(getState());
	});
});
