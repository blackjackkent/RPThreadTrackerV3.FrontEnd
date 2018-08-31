import * as actions from '../fetchPublicThreadsStatus';

describe('fetchPublicThreadsStatus', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchPublicThreadsStatus(threads);
		expect(action.type).toBe('FETCH_PUBLIC_THREADS_STATUS');
		expect(action.data).toBe(threads);
	});
});
describe('fetchedPublicThreadsStatusFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedPublicThreadsStatusFailure();
		expect(action.type).toBe('FETCHED_PUBLIC_THREADS_STATUS_FAILURE');
	});
});
describe('fetchedPublicThreadsStatusSuccess', () => {
	it('should create action with type', () => {
		const action = actions.fetchedPublicThreadsStatusSuccess();
		expect(action.type).toBe('FETCHED_PUBLIC_THREADS_STATUS_SUCCESS');
	});
});
describe('fetchedPublicThreadsStatusChunkFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedPublicThreadsStatusChunkFailure();
		expect(action.type).toBe('FETCHED_PUBLIC_THREADS_STATUS_CHUNK_FAILURE');
	});
});
describe('fetchedPublicThreadsStatusChunkSuccess', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchedPublicThreadsStatusChunkSuccess(threads);
		expect(action.type).toBe('FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS');
		expect(action.data).toBe(threads);
	});
});
