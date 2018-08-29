import bulkThreadsToEdit from '../bulkThreadsToEdit';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = bulkThreadsToEdit(undefined, {});
		expect(result).toEqual([]);
	});
	it('should handle OPEN_BULK_UNTRACK_THREADS_MODAL', () => {
		const action = {
			type: actions.OPEN_BULK_UNTRACK_THREADS_MODAL,
			data: [{}, {}, {}]
		};
		const result = bulkThreadsToEdit([{}, {}], action);
		expect(result).toEqual([{}, {}, {}]);
	});
	it('should handle CLOSE_BULK_UNTRACK_THREADS_MODAL', () => {
		const action = {
			type: actions.CLOSE_BULK_UNTRACK_THREADS_MODAL
		};
		const result = bulkThreadsToEdit([{}, {}], action);
		expect(result).toEqual([]);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = bulkThreadsToEdit([{}, {}], action);
		expect(result).toEqual([]);
	});
});
