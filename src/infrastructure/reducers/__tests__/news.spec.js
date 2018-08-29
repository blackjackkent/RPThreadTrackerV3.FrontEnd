import news from '../news';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = news(undefined, {});
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_NEWS_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_NEWS_SUCCESS,
			data: [{}, {}]
		};
		const result = news([], action);
		expect(result).toEqual([{}, {}]);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = news([{}, {}], action);
		expect(result).toEqual([]);
	});
});
