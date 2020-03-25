import { when } from 'jest-when';
import * as utility from '~/utility';
import getActiveThreadPartners from '../getActiveThreadPartners';

jest.mock('../../../common', () => ({
	getAllActiveThreads: jest.fn()
}));
jest.mock('~/utility', () => ({
	filterDuplicatesFromArray: jest.fn()
}));

const getThreads = () => [
	{
		partnerUrlIdentifier: 'partner1'
	},
	{
		partnerUrlIdentifier: 'partner2'
	},
	{
		partnerUrlIdentifier: 'partner2'
	},
	{
		partnerUrlIdentifier: 'partner3'
	}
];
const getPartners = () => ['partner1', 'partner2', 'partner2', 'partner3'];
const getFilterOutput = () => ['partner1', 'partner2', 'partner3'];

describe('behavior', () => {
	it('should return empty array when thread list is empty', () => {
		// Act
		const result = getActiveThreadPartners.resultFunc([]);
		// Assert
		expect(result).toHaveLength(0);
	});
	it('should return filtered characters when thread list not empty', () => {
		// Arrange
		when(utility.filterDuplicatesFromArray)
			.calledWith(expect.arrayContaining(getPartners()))
			.mockReturnValue(getFilterOutput());
		// Act
		const result = getActiveThreadPartners.resultFunc(getThreads());
		// Assert
		expect(utility.filterDuplicatesFromArray).toHaveBeenCalled();
		expect(result).toEqual(getFilterOutput());
	});
});
