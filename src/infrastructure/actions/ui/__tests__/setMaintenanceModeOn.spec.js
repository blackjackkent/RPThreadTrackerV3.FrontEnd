import * as actions from '../setMaintenanceModeOn';

describe('setMaintenanceModeOn', () => {
	it('should create action with type', () => {
		const action = actions.setMaintenanceModeOn();
		expect(action.type).toBe('SET_MAINTENANCE_MODE_ON');
	});
});
