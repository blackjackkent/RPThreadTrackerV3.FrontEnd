import characters from '../characters';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = characters(undefined, {});
		expect(result).toEqual([]);
	});
	it('should handle FETCH_CHARACTERS', () => {
		const action = {
			type: actions.FETCH_CHARACTERS
		};
		const result = characters([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_CHARACTERS_FAILURE', () => {
		const action = {
			type: actions.FETCHED_CHARACTERS_FAILURE
		};
		const result = characters([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_CHARACTERS_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_CHARACTERS_SUCCESS,
			data: [{}, {}, {}]
		};
		const result = characters([{}, {}], action);
		expect(result).toEqual([{}, {}, {}]);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = characters([{}, {}], action);
		expect(result).toEqual([]);
	});
});
