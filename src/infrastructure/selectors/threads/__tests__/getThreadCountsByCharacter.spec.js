import getThreadCountsByCharacter from '../getThreadCountsByCharacter';

const getThreads = () => [
	{
		threadId: 1,
		characterId: 1
	},
	{
		threadId: 2,
		characterId: 2
	},
	{
		threadId: 3,
		characterId: 1
	},
	{
		threadId: 4,
		characterId: 3
	}
];
const getCharacters = () => [
	{
		characterId: 1
	},
	{
		characterId: 2
	}
];

describe('behavior', () => {
	it('should return empty object if no threads on state', () => {
		const state = {
			activeThreads: [],
			characters: getCharacters()
		};
		const result = getThreadCountsByCharacter(state);
		expect(result).toEqual({});
	});
	it('should return empty object if no characters on state', () => {
		const state = {
			activeThreads: getThreads(),
			characters: {}
		};
		const result = getThreadCountsByCharacter(state);
		expect(result).toEqual({});
	});
	it('should return mapping object of character IDs to thread counts', () => {
		const state = {
			activeThreads: getThreads(),
			characters: getCharacters()
		};
		const result = getThreadCountsByCharacter(state);
		expect(result).toEqual({
			1: 2,
			2: 1
		});
	});
});
