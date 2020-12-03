import threadFilter from '../threadFilter';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = threadFilter(undefined, {});
		expect(result).toEqual({});
	});
	it('should handle SET_FILTERED_TAG', () => {
		const action = {
			type: actions.SET_FILTERED_TAG,
			data: 'tag1'
		};
		const result = threadFilter({}, action);
		expect(result).toEqual({
			filteredTag: 'tag1'
		});
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = threadFilter(
			{
				filteredTag: 'tag'
			},
			action
		);
		expect(result).toEqual({});
	});
});
