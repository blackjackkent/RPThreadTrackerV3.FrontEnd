import threadToEdit from '../threadToEdit';
import * as actions from '../../actions';

const expectedDefaultState = {
	characterId: null,
	userTitle: '',
	postId: '',
	partnerUrlIdentifier: '',
	threadTags: []
};

describe('action handling', () => {
	it('should set initial state', () => {
		const result = threadToEdit(undefined, {});
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle OPEN_UNTRACK_THREAD_MODAL with action data', () => {
		const action = {
			type: actions.OPEN_UNTRACK_THREAD_MODAL,
			data: {
				userTitle: 'Test Thread'
			}
		};
		const result = threadToEdit({}, action);
		expect(result).toEqual({ userTitle: 'Test Thread' });
	});
	it('should handle OPEN_UPSERT_THREAD_MODAL with action data', () => {
		const action = {
			type: actions.OPEN_UPSERT_THREAD_MODAL,
			data: {
				userTitle: 'Test Thread'
			}
		};
		const result = threadToEdit({}, action);
		expect(result).toEqual({ userTitle: 'Test Thread' });
	});
	it('should handle OPEN_UNTRACK_THREAD_MODAL without action data', () => {
		const action = {
			type: actions.OPEN_UNTRACK_THREAD_MODAL
		};
		const result = threadToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle OPEN_UPSERT_THREAD_MODAL without action data', () => {
		const action = {
			type: actions.OPEN_UPSERT_THREAD_MODAL
		};
		const result = threadToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle CLOSE_UNTRACK_THREAD_MODAL', () => {
		const action = {
			type: actions.CLOSE_UNTRACK_THREAD_MODAL
		};
		const result = threadToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle CLOSE_UPSERT_THREAD_MODAL', () => {
		const action = {
			type: actions.CLOSE_UPSERT_THREAD_MODAL
		};
		const result = threadToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = threadToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
});
