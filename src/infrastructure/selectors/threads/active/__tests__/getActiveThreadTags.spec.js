import { when } from 'jest-when';
import * as utility from '~/utility';
import getActiveThreadTags from '../getActiveThreadTags';

jest.mock('../../../common', () => ({
	getAllActiveThreads: jest.fn()
}));
jest.mock('~/utility', () => ({
	filterDuplicatesFromArray: jest.fn(),
	flattenArrayOfArrays: jest.fn(),
	sortTags: jest.fn((a, b) => a.localeCompare(b))
}));

const getThreads = () => [
	{
		threadTags: ['tag5', 'tag2']
	},
	{
		threadTags: ['tag2', 'tag3']
	},
	{
		threadTags: ['tag3', 'tag4']
	},
	{
		threadTags: ['tag4', 'tag1']
	}
];
const getTags = () => [
	['tag5', 'tag2'],
	['tag2', 'tag3'],
	['tag3', 'tag4'],
	['tag4', 'tag1']
];
const getFlattenedTags = () => ['tag5', 'tag2', 'tag2', 'tag3', 'tag3', 'tag4', 'tag4', 'tag1'];
const getDeduplicatedTags = () => ['tag5', 'tag2', 'tag3', 'tag4', 'tag1'];
const getSortedTags = () => ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];

describe('behavior', () => {
	it('should return empty array when thread list is empty', () => {
		// Act
		const result = getActiveThreadTags.resultFunc([]);
		// Assert
		expect(result).toHaveLength(0);
	});
	it('should return filtered tags when thread list not empty', () => {
		// Arrange
		when(utility.flattenArrayOfArrays)
			.calledWith(expect.arrayContaining(getTags()))
			.mockReturnValue(getFlattenedTags());
		when(utility.filterDuplicatesFromArray)
			.calledWith(expect.arrayContaining(getFlattenedTags()))
			.mockReturnValue(getDeduplicatedTags());
		// Act
		const result = getActiveThreadTags.resultFunc(getThreads());
		// Assert
		expect(utility.flattenArrayOfArrays).toHaveBeenCalled();
		expect(utility.filterDuplicatesFromArray).toHaveBeenCalled();
		expect(utility.sortTags).toHaveBeenCalledTimes(9);
		expect(result).toEqual(getSortedTags());
	});
});
