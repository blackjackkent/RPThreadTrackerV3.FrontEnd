import randomThread from '../randomThread';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = randomThread(undefined, {});
		expect(result).toEqual({});
	});
	it('should handle GENERATED_RANDOM_THREAD_SUCCESS', () => {
		const action = {
			type: actions.GENERATED_RANDOM_THREAD_SUCCESS,
			data: { threadId: 5 }
		};
		const result = randomThread({ threadId: 4 }, action);
		expect(result).toEqual({ threadId: 5 });
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = randomThread({ threadId: 5 }, action);
		expect(result).toEqual({});
	});
});
