import { when } from 'jest-when';
import * as utility from '../../../../../utility';
import getActiveThreadCharacters from '../getActiveThreadCharacters';

jest.mock('../../../../../utility', () => ({
	filterDuplicatesFromArray: jest.fn(arr => arr)
}));

const getThreads = () => [
	{ threadId: 1, character: { characterId: 1, urlIdentifier: 'test-character-1' } },
	{ threadId: 2, character: { characterId: 2, characterName: 'Test Character 2' } },
	{ threadId: 3, character: { characterId: 1, urlIdentifier: 'test-character-1' } },
	{ threadId: 4, character: { characterId: 3, urlIdentifier: 'test-character-3' } }
];

const getCharacterObjects = () => [
	{ characterId: 1, urlIdentifier: 'test-character-1' },
	{ characterId: 2, characterName: 'Test Character 2' },
	{ characterId: 1, urlIdentifier: 'test-character-1' },
	{ characterId: 3, urlIdentifier: 'test-character-3' }
];

const getFilterOutput = () => [
	{ characterId: 1, urlIdentifier: 'test-character-1' },
	{ characterId: 2, characterName: 'Test Character 2' },
	{ characterId: 3, urlIdentifier: 'test-character-3' }
];

describe('behavior', () => {
	it('should return an empty array if no threads on state', () => {
		const state = {
			activeThreads: []
		};
		const result = getActiveThreadCharacters(state);
		expect(result).toEqual([]);
	});
	it('should return character list without duplicates', () => {
		when(utility.filterDuplicatesFromArray)
			.calledWith(
				expect.arrayContaining(getCharacterObjects()),
				'characterId'
			)
			.mockReturnValue(getFilterOutput());
		const state = {
			activeThreads: getThreads()
		};
		const result = getActiveThreadCharacters(state);
		expect(result).toEqual(getFilterOutput());
	});
});
