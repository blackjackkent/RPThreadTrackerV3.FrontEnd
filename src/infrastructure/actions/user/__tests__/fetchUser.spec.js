import * as actions from '../fetchUser';

describe('fetchUser', () => {
	it('should create action with type', () => {
		const action = actions.fetchUser();
		expect(action.type).toBe('FETCH_USER');
	});
});
describe('fetchedUserFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedUserFailure();
		expect(action.type).toBe('FETCHED_USER_FAILURE');
	});
});
describe('fetchedUserSuccess', () => {
	it('should create action with type and data', () => {
		const data = { id: '12345' };
		const action = actions.fetchedUserSuccess(data);
		expect(action.type).toBe('FETCHED_USER_SUCCESS');
		expect(action.data).toBe(data);
	});
});
