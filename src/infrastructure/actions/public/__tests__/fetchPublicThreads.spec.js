import * as actions from '../fetchPublicThreads';

describe('fetchPublicThreads', () => {
	it('should create action with type and data', () => {
		const view = { slug: 'test-view' };
		const action = actions.fetchPublicThreads(view);
		expect(action.type).toBe('FETCH_PUBLIC_THREADS');
		expect(action.data).toBe(view);
	});
});
describe('fetchedPublicThreadsFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.fetchedPublicThreadsFailure(errorMessage);
		expect(action.type).toBe('FETCHED_PUBLIC_THREADS_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('fetchedPublicThreadsSuccess', () => {
	it('should create action with type and data', () => {
		const threads = [{}, {}, {}];
		const action = actions.fetchedPublicThreadsSuccess(threads);
		expect(action.type).toBe('FETCHED_PUBLIC_THREADS_SUCCESS');
		expect(action.data).toBe(threads);
	});
});
