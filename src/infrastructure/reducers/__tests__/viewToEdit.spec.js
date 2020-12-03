import viewToEdit from '../viewToEdit';
import * as actions from '../../actions';

describe('action handling', () => {
	it('should set initial state', () => {
		const result = viewToEdit(undefined, {});
		expect(result).toEqual({});
	});
	it('should handle OPEN_DELETE_PUBLIC_VIEW_MODAL with action data', () => {
		const action = {
			type: actions.OPEN_DELETE_PUBLIC_VIEW_MODAL,
			data: {
				slug: 'test-view'
			}
		};
		const result = viewToEdit({}, action);
		expect(result).toEqual({
			slug: 'test-view'
		});
	});
	it('should handle OPEN_UPSERT_PUBLIC_VIEW_MODAL with action data', () => {
		const action = {
			type: actions.OPEN_UPSERT_PUBLIC_VIEW_MODAL,
			data: {
				slug: 'test-view'
			}
		};
		const result = viewToEdit({}, action);
		expect(result).toEqual({
			slug: 'test-view'
		});
	});
	it('should handle OPEN_DELETE_PUBLIC_VIEW_MODAL without action data', () => {
		const action = {
			type: actions.OPEN_DELETE_PUBLIC_VIEW_MODAL
		};
		const result = viewToEdit({}, action);
		expect(result).toEqual({});
	});
	it('should handle OPEN_UPSERT_PUBLIC_VIEW_MODAL without action data', () => {
		const action = {
			type: actions.OPEN_UPSERT_PUBLIC_VIEW_MODAL
		};
		const result = viewToEdit({}, action);
		expect(result).toEqual({});
	});
	it('should handle CLOSE_DELETE_PUBLIC_VIEW_MODAL', () => {
		const action = {
			type: actions.CLOSE_DELETE_PUBLIC_VIEW_MODAL
		};
		const result = viewToEdit({}, action);
		expect(result).toEqual({});
	});
	it('should handle CLOSE_UPSERT_PUBLIC_VIEW_MODAL', () => {
		const action = {
			type: actions.CLOSE_UPSERT_PUBLIC_VIEW_MODAL
		};
		const result = viewToEdit({}, action);
		expect(result).toEqual({});
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = viewToEdit({}, action);
		expect(result).toEqual({});
	});
});
