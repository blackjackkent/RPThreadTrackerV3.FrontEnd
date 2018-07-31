import * as actions from '../fetchActiveThreads';

describe('fetchActiveThreads', () => {
	it('should create action with type', () => {
		const action = actions.fetchActiveThreads();
		expect(action.type).toBe('FETCH_ACTIVE_THREADS');
	});
});
describe('fetchedActiveThreadsFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedActiveThreadsFailure();
		expect(action.type).toBe('FETCHED_ACTIVE_THREADS_FAILURE');
	});
});
describe('fetchedActiveThreadsSuccess', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchedActiveThreadsSuccess(threads);
		expect(action.type).toBe('FETCHED_ACTIVE_THREADS_SUCCESS');
		expect(action.data).toBe(threads);
	});
});
