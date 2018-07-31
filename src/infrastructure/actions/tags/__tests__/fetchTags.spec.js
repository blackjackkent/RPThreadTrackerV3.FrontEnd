import * as actions from '../fetchTags';

describe('fetchTags', () => {
	it('should create action with type', () => {
		const action = actions.fetchTags();
		expect(action.type).toBe('FETCH_TAGS');
	});
});
describe('fetchedTagsFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedTagsFailure();
		expect(action.type).toBe('FETCHED_TAGS_FAILURE');
	});
});
describe('fetchedTagsSuccess', () => {
	it('should create action with type and data', () => {
		const tags = [{}, {}, {}];
		const action = actions.fetchedTagsSuccess(tags);
		expect(action.type).toBe('FETCHED_TAGS_SUCCESS');
		expect(action.data).toBe(tags);
	});
});
