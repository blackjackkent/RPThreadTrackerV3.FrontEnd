import user from '../user';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = user(undefined, {});
		expect(result).toEqual({
			id: ''
		});
	});
	it('should handle FETCHED_USER_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_USER_SUCCESS,
			data: {
				id: '12345',
				username: 'test-user'
			}
		};
		const result = user({}, action);
		expect(result).toEqual({
			id: '12345',
			username: 'test-user'
		});
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = user(
			{
				id: '12345',
				username: 'test-user'
			},
			action
		);
		expect(result).toEqual({
			id: ''
		});
	});
});
