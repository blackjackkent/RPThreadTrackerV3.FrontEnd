import publicThreadFilter from '../publicThreadFilter';
import * as actions from '../../actions';
import publicThreadFilterKeys from '../../constants/publicThreadFilterKeys';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = publicThreadFilter(undefined, {});
		expect(result).toEqual(publicThreadFilterKeys.ALL);
	});
	it('should handle SET_PUBLIC_THREAD_FILTER', () => {
		const action = {
			type: actions.SET_PUBLIC_THREAD_FILTER,
			data: publicThreadFilterKeys.MY_TURN
		};
		const result = publicThreadFilter(publicThreadFilterKeys.ALL, action);
		expect(result).toEqual(publicThreadFilterKeys.MY_TURN);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = publicThreadFilter(publicThreadFilterKeys.MY_TURN, action);
		expect(result).toEqual(publicThreadFilterKeys.ALL);
	});
});
