import * as actions from '../fetchPublicThreads';

describe('fetchPublicThreads', () => {
	it('should create action with type and data', () => {
		const action = actions.fetchPublicThreads('test-slug', 'test-user');
		expect(action.type).toBe('FETCH_PUBLIC_THREADS');
		expect(action.data).toEqual({
			slug: 'test-slug',
			username: 'test-user'
		});
	});
});
describe('fetchedPublicThreadsFailure', () => {
	it('should create action with type and data', () => {
		const action = actions.fetchedPublicThreadsFailure();
		expect(action.type).toBe('FETCHED_PUBLIC_THREADS_FAILURE');
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
