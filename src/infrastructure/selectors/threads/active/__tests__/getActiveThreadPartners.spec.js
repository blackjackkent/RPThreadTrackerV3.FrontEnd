import { when } from 'jest-when';
import * as utility from '../../../../../utility';
import getActiveThreadPartners from '../getActiveThreadPartners';

jest.mock('../../../../../utility', () => ({
	filterDuplicatesFromArray: jest.fn(arr => arr)
}));

const getThreads = () => [
	{ threadId: 1, partnerUrlIdentifier: 'test-character-1' },
	{ threadId: 2, partnerUrlIdentifier: 'test-character-2' },
	{ threadId: 3, partnerUrlIdentifier: 'test-character-1' },
	{ threadId: 4, partnerUrlIdentifier: 'test-character-3' }
];

const getPartnerList = () => [
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
	it('should return an empty array if no threads on state', () => {
		const state = {
			activeThreads: []
		};
		const result = getActiveThreadPartners(state);
		expect(result).toEqual([]);
	});
	it('should return partner URL list without duplicates', () => {
		when(utility.filterDuplicatesFromArray)
			.calledWith(
				expect.arrayContaining(getPartnerList())
			)
			.mockReturnValue(getFilterOutput());
		const state = {
			activeThreads: getThreads()
		};
		const result = getActiveThreadPartners(state);
		expect(result).toEqual(getFilterOutput());
	});
});
