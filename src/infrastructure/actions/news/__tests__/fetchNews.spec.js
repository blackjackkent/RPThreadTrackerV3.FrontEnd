import * as actions from '../fetchNews';

describe('fetchNews', () => {
	it('should create action with type', () => {
		const action = actions.fetchNews();
		expect(action.type).toBe('FETCH_NEWS');
	});
});
describe('fetchedNewsSuccess', () => {
	it('should create action with type and data', () => {
		const news = [{}, {}];
		const action = actions.fetchedNewsSuccess(news);
		expect(action.type).toBe('FETCHED_NEWS_SUCCESS');
		expect(action.data).toBe(news);
	});
});
