import * as actions from '../setFilteredTag';

describe('setFilteredTag', () => {
	it('should create action with type and data', () => {
		const data = 'my-tag';
		const action = actions.setFilteredTag(data);
		expect(action.type).toBe('SET_FILTERED_TAG');
		expect(action.data).toBe(data);
	});
});
