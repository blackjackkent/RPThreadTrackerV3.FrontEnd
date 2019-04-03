import * as actions from '../clearActiveThreads';

describe('clearActiveThreads', () => {
	it('should create action with type', () => {
		const action = actions.clearActiveThreads();
		expect(action.type).toBe('CLEAR_ACTIVE_THREADS');
	});
});
