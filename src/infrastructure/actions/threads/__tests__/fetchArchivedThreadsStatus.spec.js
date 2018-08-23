import * as actions from '../fetchArchivedThreadsStatus';

describe('fetchArchivedThreadsStatus', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchArchivedThreadsStatus(threads);
		expect(action.type).toBe('FETCH_ARCHIVED_THREADS_STATUS');
		expect(action.data).toBe(threads);
	});
});
describe('fetchedArchivedThreadsStatusFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedArchivedThreadsStatusFailure();
		expect(action.type).toBe('FETCHED_ARCHIVED_THREADS_STATUS_FAILURE');
	});
});
describe('fetchedArchivedThreadsStatusSuccess', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchedArchivedThreadsStatusSuccess(threads);
		expect(action.type).toBe('FETCHED_ARCHIVED_THREADS_STATUS_SUCCESS');
		expect(action.data).toBe(threads);
	});
});
describe('fetchedArchivedThreadsStatusChunkFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedArchivedThreadsStatusChunkFailure();
		expect(action.type).toBe('FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_FAILURE');
	});
});
describe('fetchedArchivedThreadsStatusChunkSuccess', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchedArchivedThreadsStatusChunkSuccess(threads);
		expect(action.type).toBe('FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_SUCCESS');
		expect(action.data).toBe(threads);
	});
});
