import * as actions from '../generateRandomThread';

describe('generateRandomThread', () => {
	it('should create action with type and analytics', () => {
		const data = {
			includeHiatused: true
		};
		const action = actions.generateRandomThread(data);
		expect(action.type).toBe('GENERATE_RANDOM_THREAD');
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Thread');
		expect(action.analytics.event.action).toBe('Generated random thread');
	});
});
describe('generatedRandomThreadSuccess', () => {
	it('should create action with type and data', () => {
		const data = {
			threadId: 1
		};
		const action = actions.generatedRandomThreadSuccess(data);
		expect(action.type).toBe('GENERATED_RANDOM_THREAD_SUCCESS');
		expect(action.data).toBe(data);
	});
});
