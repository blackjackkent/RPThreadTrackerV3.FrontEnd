import * as actions from '../fetchLegacyPublicThreads';

describe('fetchLegacyPublicThreads', () => {
	it('should create action with type and data', () => {
		const view = {
			slug: 'test-view'
		};
		const action = actions.fetchLegacyPublicThreads(view);
		expect(action.type).toBe('FETCH_LEGACY_PUBLIC_THREADS');
		expect(action.data).toBe(view);
	});
});
