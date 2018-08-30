import * as actions from '../upsertCharacter';

describe('upsertCharacter', () => {
	it('should create action with type, data, and analytics if character ID is present', () => {
		const character = { characterId: 13579 };
		const action = actions.upsertCharacter(character);
		expect(action.type).toBe('UPSERT_CHARACTER');
		expect(action.data).toBe(character);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Character');
		expect(action.analytics.event.action).toBe('Edited character');
	});
	it('should create action with type, data, and analytics if character ID is not present', () => {
		const character = { characterName: 'Test Character' };
		const action = actions.upsertCharacter(character);
		expect(action.type).toBe('UPSERT_CHARACTER');
		expect(action.data).toBe(character);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Character');
		expect(action.analytics.event.action).toBe('Added character');
	});
});
describe('upsertCharacterFailure', () => {
	it('should create action with type', () => {
		const action = actions.upsertCharacterFailure();
		expect(action.type).toBe('UPSERT_CHARACTER_FAILURE');
	});
});
describe('upsertCharacterSuccess', () => {
	it('should create action with type and data', () => {
		const character = { characterId: 13579 };
		const action = actions.upsertCharacterSuccess(character);
		expect(action.type).toBe('UPSERT_CHARACTER_SUCCESS');
		expect(action.data).toBe(character);
	});
});
