import { when } from 'jest-when';
import * as utility from '../../../../../utility';
import getActiveThreadCharacters from '../getActiveThreadCharacters';

jest.mock('../../../common', () => ({
	getAllActiveThreads: jest.fn()
}));
jest.mock('../../../../../utility', () => ({
	filterDuplicatesFromArray: jest.fn()
}));

const getThreads = () => [
	{ character: { characterId: 1 } },
	{ character: { characterId: 2 } },
	{ character: { characterId: 2 } },
	{ character: { characterId: 3 } }
];
const getCharacters = () => [
	{ characterId: 1 },
	{ characterId: 2 },
	{ characterId: 2 },
	{ characterId: 3 }
];
const getFilterOutput = () => [
	{ character: { characterId: 1 } },
	{ character: { characterId: 2 } },
	{ character: { characterId: 3 } }
];

describe('behavior', () => {
	it('should return empty array when threads list is empty', () => {
		// Act
		const result = getActiveThreadCharacters.resultFunc([]);
		// Assert
		expect(result).toHaveLength(0);
	});
	it('should return filtered characters when threads list not empty', () => {
		// Arrange
		when(utility.filterDuplicatesFromArray)
			.calledWith(
				expect.arrayContaining(getCharacters())
			)
			.mockReturnValue(getFilterOutput());
		// Act
		const result = getActiveThreadCharacters.resultFunc(getThreads());
		// Assert
		expect(utility.filterDuplicatesFromArray).toHaveBeenCalled();
		expect(result).toEqual(getFilterOutput());
	});
});
