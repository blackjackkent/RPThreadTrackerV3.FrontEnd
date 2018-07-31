import * as actions from '../untrackCharacter';

describe('untrackCharacter', () => {
	it('should create action with type, data, and analytics', () => {
		const character = { characterId: 13579 };
		const action = actions.untrackCharacter(character);
		expect(action.type).toBe('UNTRACK_CHARACTER');
		expect(action.data).toBe(character);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Character');
		expect(action.analytics.event.action).toBe('Untracked character');
	});
});
describe('untrackCharacterFailure', () => {
	it('should create action with type and data', () => {
		const errorMessage = 'There was an error.';
		const action = actions.untrackCharacterFailure(errorMessage);
		expect(action.type).toBe('UNTRACK_CHARACTER_FAILURE');
		expect(action.data).toBe(errorMessage);
	});
});
describe('untrackCharacterSuccess', () => {
	it('should create action with type', () => {
		const action = actions.untrackCharacterSuccess();
		expect(action.type).toBe('UNTRACK_CHARACTER_SUCCESS');
	});
});
