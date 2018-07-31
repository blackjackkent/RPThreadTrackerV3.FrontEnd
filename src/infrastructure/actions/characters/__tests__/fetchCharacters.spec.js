import * as actions from '../fetchCharacters';

describe('fetchCharacters', () => {
	it('should create action with type', () => {
		const action = actions.fetchCharacters();
		expect(action.type).toBe('FETCH_CHARACTERS');
	});
});
describe('fetchedCharactersFailure', () => {
	it('should create action with type', () => {
		const action = actions.fetchedCharactersFailure();
		expect(action.type).toBe('FETCHED_CHARACTERS_FAILURE');
	});
});
describe('fetchedCharactersSuccess', () => {
	it('should create action with type and data', () => {
		const characters = [{}, {}, {}];
		const action = actions.fetchedCharactersSuccess(characters);
		expect(action.type).toBe('FETCHED_CHARACTERS_SUCCESS');
		expect(action.data).toBe(characters);
	});
});
