import activeThreads from '../activeThreads';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = activeThreads(undefined, {});
		expect(result).toEqual([]);
	});
	it('should handle FETCH_ACTIVE_THREADS', () => {
		const action = {
			type: actions.FETCH_ACTIVE_THREADS
		};
		const result = activeThreads([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_ACTIVE_THREADS_FAILURE', () => {
		const action = {
			type: actions.FETCHED_ACTIVE_THREADS_FAILURE
		};
		const result = activeThreads([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_ACTIVE_THREADS_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_ACTIVE_THREADS_SUCCESS,
			data: {
				threads: [{}, {}, {}]
			}
		};
		const result = activeThreads([{}, {}], action);
		expect(result).toEqual([{}, {}, {}]);
	});
	it('should handle UPSERT_THREAD_SUCCESS', () => {
		const action = {
			type: actions.UPSERT_THREAD_SUCCESS
		};
		const result = activeThreads([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = activeThreads([{}, {}], action);
		expect(result).toEqual([]);
	});
});
