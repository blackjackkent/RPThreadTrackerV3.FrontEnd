import archivedThreads from '../archivedThreads';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = archivedThreads(undefined, {});
		expect(result).toEqual([]);
	});
	it('should handle FETCH_ARCHIVED_THREADS', () => {
		const action = {
			type: actions.FETCH_ARCHIVED_THREADS
		};
		const result = archivedThreads([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_ARCHIVED_THREADS_FAILURE', () => {
		const action = {
			type: actions.FETCHED_ARCHIVED_THREADS_FAILURE
		};
		const result = archivedThreads([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_ARCHIVED_THREADS_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_ARCHIVED_THREADS_SUCCESS,
			data: {
				threads: [{}, {}, {}]
			}
		};
		const result = archivedThreads([{}, {}], action);
		expect(result).toEqual([{}, {}, {}]);
	});
	it('should handle UPSERT_THREAD_SUCCESS', () => {
		const action = {
			type: actions.UPSERT_THREAD_SUCCESS
		};
		const result = archivedThreads([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = archivedThreads([{}, {}], action);
		expect(result).toEqual([]);
	});
});
