import {
	getAllActiveThreads,
	getAllActiveThreadStatus,
	getAllArchivedThreads,
	getAllArchivedThreadStatus,
	getFilteredTag,
	getPublicThreadFilter,
	getPublicThreadsView,
	getAllPublicThreads,
	getAllPublicThreadStatus,
	getAllCharacters,
	getNews,
	getUserSettings,
	getTags,
	getLoading
} from '../commonState';

describe('getAllActiveThreads', () => {
	it('should return active threads from state', () => {
		// Arrange
		const state = {
			activeThreads: [{}, {}, {}]
		};
		// Act
		const result = getAllActiveThreads(state);
		// Assert
		expect(result).toHaveLength(3);
	});
});
describe('getAllActiveThreadStatus', () => {
	it('should return active threads status from state', () => {
		// Arrange
		const state = {
			activeThreadsStatus: [{}, {}, {}]
		};
		// Act
		const result = getAllActiveThreadStatus(state);
		// Assert
		expect(result).toHaveLength(3);
	});
});
describe('getAllArchivedThreads', () => {
	it('should return archived threads from state', () => {
		// Arrange
		const state = {
			archivedThreads: [{}, {}, {}]
		};
		// Act
		const result = getAllArchivedThreads(state);
		// Assert
		expect(result).toHaveLength(3);
	});
});
describe('getAllArchivedThreadsStatus', () => {
	it('should return archived threads status from state', () => {
		// Arrange
		const state = {
			archivedThreadsStatus: [{}, {}, {}]
		};
		// Act
		const result = getAllArchivedThreadStatus(state);
		// Assert
		expect(result).toHaveLength(3);
	});
});
describe('getFilteredTag', () => {
	it('should return null when threadFilter is null', () => {
		// Arrange
		const state = {
			threadFilter: null
		};
		// Act
		const result = getFilteredTag(state);
		// Assert
		expect(result).toBe(null);
	});
	it('should return filtered tag when threadFilter is not null', () => {
		// Arrange
		const state = {
			threadFilter: {
				filteredTag: 'test-tag'
			}
		};
		// Act
		const result = getFilteredTag(state);
		// Assert
		expect(result).toBe('test-tag');
	});
});
describe('getPublicThreadFilter', () => {
	it('should return archived threads status from state', () => {
		// Arrange
		const state = {
			publicThreadFilter: 'My Turn'
		};
		// Act
		const result = getPublicThreadFilter(state);
		// Assert
		expect(result).toBe('My Turn');
	});
});
describe('getAllPublicThreads', () => {
	it('should return threads from publicThreads state', () => {
		// Arrange
		const state = {
			publicThreads: {
				threads: [{}, {}, {}]
			}
		};
		// Act
		const result = getAllPublicThreads(state);
		// Assert
		expect(result).toHaveLength(3);
	});
});
describe('getPublicThreadsView', () => {
	it('should return view from publicThreads state', () => {
		// Arrange
		const state = {
			publicThreads: {
				view: {
					id: '12345'
				}
			}
		};
		// Act
		const result = getPublicThreadsView(state);
		// Assert
		expect(result.id).toBe('12345');
	});
});
describe('getAllPublicThreadStatus', () => {
	it('should return public threads status from state', () => {
		// Arrange
		const state = {
			publicThreadsStatus: [{}, {}, {}]
		};
		// Act
		const result = getAllPublicThreadStatus(state);
		// Assert
		expect(result).toHaveLength(3);
	});
});
describe('getAllCharacters', () => {
	it('should return characters from state', () => {
		// Arrange
		const state = {
			characters: [{}, {}, {}]
		};
		// Act
		const result = getAllCharacters(state);
		// Assert
		expect(result).toHaveLength(3);
	});
});
describe('getNews', () => {
	it('should return news from state', () => {
		// Arrange
		const state = {
			news: [{}, {}, {}]
		};
		// Act
		const result = getNews(state);
		// Assert
		expect(result).toHaveLength(3);
	});
});
describe('getUserSettings', () => {
	it('should return user settings from state', () => {
		// Arrange
		const state = {
			userSettings: {
				settingsId: 1
			}
		};
		// Act
		const result = getUserSettings(state);
		// Assert
		expect(result).toBe(state.userSettings);
	});
});
describe('getTags', () => {
	it('should return tags from state', () => {
		// Arrange
		const state = {
			tags: ['tag1', 'tag2', 'tag3']
		};
		// Act
		const result = getTags(state);
		// Assert
		expect(result).toHaveLength(3);
	});
});
describe('getLoading', () => {
	it('should return loading condition from state', () => {
		// Arrange
		const state = {
			loading: {
				isLoadingTest1: true
			}
		};
		// Act
		const result = getLoading(state);
		// Assert
		expect(result.isLoadingTest1).toBe(true);
	});
});
