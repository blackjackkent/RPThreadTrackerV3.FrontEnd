import characterToEdit from '../characterToEdit';
import * as actions from '../../actions';

const expectedDefaultState = {
	characterName: '',
	platformId: 1,
	urlIdentifier: ''
};

describe('action handling', () => {
	it('should set initial state', () => {
		const result = characterToEdit(undefined, {});
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle OPEN_UNTRACK_CHARACTER_MODAL with action data', () => {
		const action = {
			type: actions.OPEN_UNTRACK_CHARACTER_MODAL,
			data: {
				characterName: 'Test Character'
			}
		};
		const result = characterToEdit({}, action);
		expect(result).toEqual({ characterName: 'Test Character' });
	});
	it('should handle OPEN_UPSERT_CHARACTER_MODAL with action data', () => {
		const action = {
			type: actions.OPEN_UPSERT_CHARACTER_MODAL,
			data: {
				characterName: 'Test Character'
			}
		};
		const result = characterToEdit({}, action);
		expect(result).toEqual({ characterName: 'Test Character' });
	});
	it('should handle OPEN_UNTRACK_CHARACTER_MODAL without action data', () => {
		const action = {
			type: actions.OPEN_UNTRACK_CHARACTER_MODAL
		};
		const result = characterToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle OPEN_UPSERT_CHARACTER_MODAL without action data', () => {
		const action = {
			type: actions.OPEN_UPSERT_CHARACTER_MODAL
		};
		const result = characterToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle CLOSE_UNTRACK_CHARACTER_MODAL', () => {
		const action = {
			type: actions.CLOSE_UNTRACK_CHARACTER_MODAL
		};
		const result = characterToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle CLOSE_UPSERT_CHARACTER_MODAL', () => {
		const action = {
			type: actions.CLOSE_UPSERT_CHARACTER_MODAL
		};
		const result = characterToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = characterToEdit({}, action);
		expect(result).toEqual(expectedDefaultState);
	});
});
