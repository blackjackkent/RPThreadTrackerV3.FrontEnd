import * as utility from '../../../../utility';
import getCharactersSortedByIdentifier from '../getCharactersSortedByIdentifier';

jest.mock('../../../../utility', () => ({
	sortCharacters: jest.fn((a, b) => a - b)
}));

describe('behavior', () => {
	it('should return empty array when no characters in state', () => {
		const state = { characters: [] };
		const result = getCharactersSortedByIdentifier(state);
		expect(result).toHaveLength(0);
	});
	it('should execute sort function on state characters', () => {
		const state = {
			characters: [5, 3, 8, 2, 7, 9]
		};
		const result = getCharactersSortedByIdentifier(state);
		expect(result).toEqual([2, 3, 5, 7, 8, 9]);
		expect(utility.sortCharacters).toHaveBeenCalledTimes(8);
	});
});
