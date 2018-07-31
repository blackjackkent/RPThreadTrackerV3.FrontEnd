import * as actions from '../fetchPublicViews';

describe('fetchPublicViews', () => {
	it('should create action with type', () => {
		const action = actions.fetchPublicViews();
		expect(action.type).toBe('FETCH_PUBLIC_VIEWS');
	});
});
describe('fetchedPublicViewsFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedPublicViewsFailure();
		expect(action.type).toBe('FETCHED_PUBLIC_VIEWS_FAILURE');
	});
});
describe('fetchedPublicViewsSuccess', () => {
	it('should create action with type and data', () => {
		const views = [{}, {}, {}];
		const action = actions.fetchedPublicViewsSuccess(views);
		expect(action.type).toBe('FETCHED_PUBLIC_VIEWS_SUCCESS');
		expect(action.data).toBe(views);
	});
});
