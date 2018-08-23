import * as actions from '../fetchArchivedThreads';

describe('fetchArchivedThreads', () => {
	it('should create action with type', () => {
		const action = actions.fetchArchivedThreads();
		expect(action.type).toBe('FETCH_ARCHIVED_THREADS');
	});
});
describe('fetchedArchivedThreadsFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedArchivedThreadsFailure();
		expect(action.type).toBe('FETCHED_ARCHIVED_THREADS_FAILURE');
	});
});
describe('fetchedArchivedThreadsSuccess', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchedArchivedThreadsSuccess(threads);
		expect(action.type).toBe('FETCHED_ARCHIVED_THREADS_SUCCESS');
		expect(action.data).toBe(threads);
	});
});
