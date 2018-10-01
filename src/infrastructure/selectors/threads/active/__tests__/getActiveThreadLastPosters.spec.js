import { when } from 'jest-when';
import * as utility from '../../../../../utility';
import getActiveThreadLastPosters from '../getActiveThreadLastPosters';

jest.mock('../../../../../utility', () => ({
	filterDuplicatesFromArray: jest.fn(arr => arr)
}));

const getThreadsStatuses = () => [
	{ postId: 1, lastPosterUrlIdentifier: 'test-character-1' },
	{ postId: 2, lastPosterUrlIdentifier: 'test-character-2' },
	{ postId: 3, lastPosterUrlIdentifier: 'test-character-1' },
	{ postId: 4, lastPosterUrlIdentifier: 'test-character-3' }
];

const getPosterList = () => [
	'test-character-1',
	'test-character-2',
	'test-character-1',
	'test-character-3'
];

const getFilterOutput = () => [
	'test-character-1',
	'test-character-2',
	'test-character-3'
];

describe('behavior', () => {
	it('should return an empty array if no statuses on state', () => {
		const state = {
			activeThreadsStatus: []
		};
		const result = getActiveThreadLastPosters(state);
		expect(result).toEqual([]);
	});
	it('should return poster URL list without duplicates', () => {
		when(utility.filterDuplicatesFromArray)
			.calledWith(
				expect.arrayContaining(getPosterList())
			)
			.mockReturnValue(getFilterOutput());
		const state = {
			activeThreadsStatus: getThreadsStatuses()
		};
		const result = getActiveThreadLastPosters(state);
		expect(result).toEqual(getFilterOutput());
	});
});
