import tagToEdit from '../tagToEdit';
import * as actions from '../../actions';

const getState = (overrides) => ({
	selectedTag: null,
	updatedValue: null,
	...overrides
});
describe('action handling', () => {
	it('should set initial state', () => {
		const result = tagToEdit(undefined, {});
		expect(result).toEqual(getState());
	});
	it('should handle OPEN_BULK_DELETE_TAG_MODAL with action data', () => {
		const action = {
			type: actions.OPEN_BULK_DELETE_TAG_MODAL,
			data: {
				selectedTag: 'test tag'
			}
		};
		const initialState = getState();
		const result = tagToEdit(initialState, action);
		expect(result).toEqual({
			selectedTag: 'test tag'
		});
	});
	it('should handle OPEN_BULK_UPDATE_TAG_MODAL with action data', () => {
		const action = {
			type: actions.OPEN_BULK_UPDATE_TAG_MODAL,
			data: {
				selectedTag: 'test tag',
				updatedValue: 'test tag updated'
			}
		};
		const initialState = getState();
		const result = tagToEdit(initialState, action);
		expect(result).toEqual({
			selectedTag: 'test tag',
			updatedValue: 'test tag updated'
		});
	});
	it('should handle CLOSE_BULK_UPDATE_TAG_MODAL', () => {
		const action = {
			type: actions.CLOSE_BULK_UPDATE_TAG_MODAL
		};
		const result = tagToEdit({}, action);
		expect(result).toEqual(getState());
	});
	it('should handle CLOSE_BULK_DELETE_TAG_MODAL', () => {
		const action = {
			type: actions.CLOSE_BULK_DELETE_TAG_MODAL
		};
		const result = tagToEdit({}, action);
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = tagToEdit({}, action);
		expect(result).toEqual(getState());
	});
});
