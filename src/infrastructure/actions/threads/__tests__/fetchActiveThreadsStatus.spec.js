import * as actions from '../fetchActiveThreadsStatus';

describe('fetchActiveThreadsStatus', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchActiveThreadsStatus(threads);
		expect(action.type).toBe('FETCH_ACTIVE_THREADS_STATUS');
		expect(action.data).toBe(threads);
	});
});
describe('fetchedActiveThreadsStatusFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedActiveThreadsStatusFailure();
		expect(action.type).toBe('FETCHED_ACTIVE_THREADS_STATUS_FAILURE');
	});
});
describe('fetchedActiveThreadsStatusSuccess', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchedActiveThreadsStatusSuccess(threads);
		expect(action.type).toBe('FETCHED_ACTIVE_THREADS_STATUS_SUCCESS');
		expect(action.data).toBe(threads);
	});
});
describe('fetchedActiveThreadsStatusChunkFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedActiveThreadsStatusChunkFailure();
		expect(action.type).toBe('FETCHED_ACTIVE_THREADS_STATUS_CHUNK_FAILURE');
	});
});
describe('fetchedActiveThreadsStatusChunkSuccess', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchedActiveThreadsStatusChunkSuccess(threads);
		expect(action.type).toBe('FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS');
		expect(action.data).toBe(threads);
	});
});
