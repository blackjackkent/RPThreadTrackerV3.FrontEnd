import * as actions from '../untrackCharacterModal';

describe('closeUntrackCharacterModal', () => {
	it('should create action with type', () => {
		const action = actions.closeUntrackCharacterModal();
		expect(action.type).toBe('CLOSE_UNTRACK_CHARACTER_MODAL');
	});
});
describe('openUntrackCharacterModal', () => {
	it('should create action with type and data', () => {
		const data = { characterId: 1 };
		const action = actions.openUntrackCharacterModal(data);
		expect(action.type).toBe('OPEN_UNTRACK_CHARACTER_MODAL');
		expect(action.data).toBe(data);
	});
});
