import getThreadCountsByCharacter from '../getThreadCountsByCharacter';

jest.mock('../../common', () => ({
	getAllCharacters: jest.fn(),
	getAllActiveThreads: jest.fn()
}));

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
		// Act
		const result = getThreadCountsByCharacter.resultFunc([], getCharacters());
		// Assert
		expect(result).toEqual({});
	});
	it('should return empty object if no characters on state', () => {
		// Act
		const result = getThreadCountsByCharacter.resultFunc(getThreads(), []);
		// Assert
		expect(result).toEqual({});
	});
	it('should return mapping object of character IDs to thread counts', () => {
		// Act
		const result = getThreadCountsByCharacter.resultFunc(getThreads(), getCharacters());
		// Assert
		expect(result).toEqual({
			1: 2,
			2: 1
		});
	});
});
