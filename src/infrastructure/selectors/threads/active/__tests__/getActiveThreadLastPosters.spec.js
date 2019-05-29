import { when } from 'jest-when';
import * as utility from '~/utility';
import getActiveThreadLastPosters from '../getActiveThreadLastPosters';

jest.mock('../../../common', () => ({
	getAllActiveThreadStatus: jest.fn()
}));
jest.mock('~/utility', () => ({
	filterDuplicatesFromArray: jest.fn()
}));

const getThreadStatuses = () => [
	{ lastPosterUrlIdentifier: 'partner1' },
	{ lastPosterUrlIdentifier: 'partner2' },
	{ lastPosterUrlIdentifier: 'partner2' },
	{ lastPosterUrlIdentifier: 'partner3' }
];
const getPartners = () => [
	'partner1',
	'partner2',
	'partner2',
	'partner3'
];
const getFilterOutput = () => [
	'partner1',
	'partner2',
	'partner3'
];

describe('behavior', () => {
	it('should return empty array when thread status list is empty', () => {
		// Act
		const result = getActiveThreadLastPosters.resultFunc([]);
		// Assert
		expect(result).toHaveLength(0);
	});
	it('should return filtered characters when thread status list not empty', () => {
		// Arrange
		when(utility.filterDuplicatesFromArray)
			.calledWith(
				expect.arrayContaining(getPartners())
			)
			.mockReturnValue(getFilterOutput());
		// Act
		const result = getActiveThreadLastPosters.resultFunc(getThreadStatuses());
		// Assert
		expect(utility.filterDuplicatesFromArray).toHaveBeenCalled();
		expect(result).toEqual(getFilterOutput());
	});
});
