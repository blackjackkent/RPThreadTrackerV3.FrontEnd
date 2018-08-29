import activeThreadsStatus from '../activeThreadsStatus';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = activeThreadsStatus(undefined, {});
		expect(result).toEqual([]);
	});
	it('should handle FETCH_ACTIVE_THREADS_STATUS', () => {
		const action = {
			type: actions.FETCH_ACTIVE_THREADS_STATUS
		};
		const result = activeThreadsStatus([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS,
			data: [{}, {}, {}]
		};
		const result = activeThreadsStatus([{}, {}], action);
		expect(result).toEqual([{}, {}, {}, {}, {}]);
	});
	it('should handle UPSERT_THREAD_SUCCESS', () => {
		const action = {
			type: actions.UPSERT_THREAD_SUCCESS
		};
		const result = activeThreadsStatus([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = activeThreadsStatus([{}, {}], action);
		expect(result).toEqual([]);
	});
});
