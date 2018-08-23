import * as actions from '../upsertCharacterModal';

describe('closeUpsertCharacterModal', () => {
	it('should create action with type', () => {
		const action = actions.closeUpsertCharacterModal();
		expect(action.type).toBe('CLOSE_UPSERT_CHARACTER_MODAL');
	});
});
describe('openUpsertCharacterModal', () => {
	it('should create action with type, data, and analytics when character has ID', () => {
		const data = { characterId: 1 };
		const action = actions.openUpsertCharacterModal(data);
		expect(action.type).toBe('OPEN_UPSERT_CHARACTER_MODAL');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/modals/update-character');
	});
	it('should create action with type, data, and analytics when character has no ID', () => {
		const data = { characterName: 'Test Character' };
		const action = actions.openUpsertCharacterModal(data);
		expect(action.type).toBe('OPEN_UPSERT_CHARACTER_MODAL');
		expect(action.data).toBe(data);
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/modals/add-character');
	});
	it('should create action with type, data, and analytics when character is undefined', () => {
		const action = actions.openUpsertCharacterModal();
		expect(action.type).toBe('OPEN_UPSERT_CHARACTER_MODAL');
		expect(action.data).toBeUndefined();
		expect(action.analytics.func).toBe('modalview');
		expect(action.analytics.path).toBe('/modals/add-character');
	});
});
