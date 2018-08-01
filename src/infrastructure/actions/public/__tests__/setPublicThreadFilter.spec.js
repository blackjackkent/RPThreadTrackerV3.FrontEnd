import * as actions from '../setPublicThreadFilter';

describe('setPublicThreadFilter', () => {
	it('should create action with type and data', () => {
		const value = 'My Turn';
		const action = actions.setPublicThreadFilter(value);
		expect(action.type).toBe('SET_PUBLIC_THREAD_FILTER');
		expect(action.data).toBe(value);
	});
});
