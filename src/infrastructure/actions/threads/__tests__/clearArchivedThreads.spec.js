import * as actions from '../clearArchivedThreads';

describe('clearArchivedThreads', () => {
	it('should create action with type', () => {
		const action = actions.clearArchivedThreads();
		expect(action.type).toBe('CLEAR_ARCHIVED_THREADS');
	});
});
