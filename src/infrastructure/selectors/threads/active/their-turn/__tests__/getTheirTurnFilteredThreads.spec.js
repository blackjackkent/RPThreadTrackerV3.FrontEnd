import { when } from 'jest-when';
import * as common from '../../../../common';
import getTheirTurnFilteredThreads from '../getTheirTurnFilteredThreads';

jest.mock('../../../../common', () => ({
	filterThreadsByTag: jest.fn(),
	getFilteredTag: jest.fn()
}));
jest.mock('../getTheirTurnThreads', () => jest.fn());

const getThreads = () => [
	{ threadId: 1, tags: ['tag1', 'tag2'] },
	{ threadId: 2, tags: ['tag2', 'tag3'] },
	{ threadId: 3, tags: ['tag3', 'tag4'] },
	{ threadId: 4, tags: ['tag4', 'tag5'] },
	{ threadId: 5, tags: ['tag5', 'tag6'] },
	{ threadId: 6, tags: ['tag6', 'tag7'] },
	{ threadId: 7, tags: ['tag7', 'tag8'] }
];
const getFilterOutput = () => [
	{ threadId: 2, tags: ['tag2', 'tag3'] },
	{ threadId: 3, tags: ['tag3', 'tag4'] }
];

beforeEach(() => {
	jest.resetAllMocks();
});
describe('behavior', () => {
	it('should return threads filtered by tag', () => {
		// Arrange
		when(common.filterThreadsByTag)
			.calledWith(
				expect.arrayContaining(getThreads()),
				'tag3'
			)
			.mockReturnValue(getFilterOutput());
		// Act
		const result = getTheirTurnFilteredThreads.resultFunc(getThreads(), 'tag3');
		// Assert
		expect(common.filterThreadsByTag).toHaveBeenCalled();
		expect(result).toEqual(getFilterOutput());
	});
});
