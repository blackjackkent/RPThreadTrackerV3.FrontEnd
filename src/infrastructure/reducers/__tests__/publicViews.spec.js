import publicViews from '../publicViews';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = publicViews(undefined, {});
		expect(result).toEqual([]);
	});
	it('should handle FETCH_PUBLIC_VIEWS', () => {
		const action = {
			type: actions.FETCH_PUBLIC_VIEWS
		};
		const result = publicViews([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_PUBLIC_VIEWS_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_PUBLIC_VIEWS_SUCCESS,
			data: [{}, {}]
		};
		const result = publicViews([], action);
		expect(result).toEqual([{}, {}]);
	});
	it('should handle FETCHED_PUBLIC_VIEWS_FAILURE', () => {
		const action = {
			type: actions.FETCHED_PUBLIC_VIEWS_FAILURE
		};
		const result = publicViews([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = publicViews([{}, {}], action);
		expect(result).toEqual([]);
	});
});
