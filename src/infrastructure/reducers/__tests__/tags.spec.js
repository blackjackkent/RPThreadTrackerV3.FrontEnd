import tags from '../tags';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = tags(undefined, {});
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_TAGS_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_TAGS_SUCCESS,
			data: ['tag1', 'tag2']
		};
		const result = tags([], action);
		expect(result).toEqual(['tag1', 'tag2']);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = tags(['tag1', 'tag2'], action);
		expect(result).toEqual([]);
	});
});
