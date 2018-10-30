import * as utility from '../../../../utility';
import getCharactersSortedByIdentifier from '../getCharactersSortedByIdentifier';

jest.mock('../../../../utility', () => ({
	sortCharacters: jest.fn((a, b) => a - b)
}));
jest.mock('../../common', () => ({
	getAllCharacters: jest.fn()
}));

describe('behavior', () => {
	it('should return empty array when no characters in state', () => {
		// Act
		const result = getCharactersSortedByIdentifier.resultFunc([]);
		// Assert
		expect(result).toHaveLength(0);
	});
	it('should execute sort function on state characters', () => {
		// Arrange
		const characters = [5, 3, 8, 2, 7, 9];
		// Act
		const result = getCharactersSortedByIdentifier.resultFunc(characters);
		// Assert
		expect(result).toEqual([2, 3, 5, 7, 8, 9]);
		expect(utility.sortCharacters).toHaveBeenCalledTimes(8);
	});
});
