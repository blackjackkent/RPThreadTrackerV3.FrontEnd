import publicThreadsStatus from '../publicThreadsStatus';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = publicThreadsStatus(undefined, {});
		expect(result).toEqual([]);
	});
	it('should handle FETCH_PUBLIC_THREADS_STATUS', () => {
		const action = {
			type: actions.FETCH_PUBLIC_THREADS_STATUS
		};
		const result = publicThreadsStatus([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS', () => {
		const action = {
			type: actions.FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS,
			data: [{}, {}, {}]
		};
		const result = publicThreadsStatus([{}, {}], action);
		expect(result).toEqual([{}, {}, {}, {}, {}]);
	});
});
