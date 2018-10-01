import { when } from 'jest-when';
import * as utility from '../../../../../utility';
import getActiveThreadTags from '../getActiveThreadTags';

jest.mock('../../../../../utility', () => ({
	filterDuplicatesFromArray: jest.fn(),
	flattenArrayOfArrays: jest.fn(),
	sortTags: jest.fn((a, b) => a.localeCompare(b))
}));

const getThreads = () => [
	{ threadId: 2, threadTags: ['tag2', 'tag3'] },
	{ threadId: 1, threadTags: ['tag1', 'tag2'] },
	{ threadId: 3, threadTags: ['tag3', 'tag4'] },
	{ threadId: 4, threadTags: ['tag5', 'tag6'] }
];

const getFlattenedListOfTags = () => [
	'tag2', 'tag3', 'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'
];

const getDeduplicatedListOfTags = () => [
	'tag2', 'tag3', 'tag1', 'tag4', 'tag5', 'tag6'
];

const getFilterOutput = () => [
	'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'
];

describe('behavior', () => {
	it('should return an empty array if no threads on state', () => {
		const state = {
			activeThreads: []
		};
		const result = getActiveThreadTags(state);
		expect(result).toEqual([]);
	});
	it('should return tag list without duplicates', () => {
		when(utility.flattenArrayOfArrays)
			.calledWith(
				expect.any(Array)
			)
			.mockReturnValue(getFlattenedListOfTags());
		when(utility.filterDuplicatesFromArray)
			.calledWith(
				expect.arrayContaining(getFlattenedListOfTags()),
				'tagText'
			)
			.mockReturnValue(getDeduplicatedListOfTags());
		const state = {
			activeThreads: getThreads()
		};
		const result = getActiveThreadTags(state);
		expect(result).toEqual(getFilterOutput());
	});
});
