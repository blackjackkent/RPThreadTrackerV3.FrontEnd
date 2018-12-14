import filterPublicStatusesByTurnFilter from '../filterPublicStatusesByTurnFilter';

const getStatuses = () => [
	// two my turn
	{ threadId: 1, isCallingCharactersTurn: true, isQueued: false },
	{ threadId: 2, isCallingCharactersTurn: true, isQueued: false },
	// three their turn
	{ threadId: 3, isCallingCharactersTurn: false, isQueued: false },
	{ threadId: 4, isCallingCharactersTurn: false, isQueued: false },
	{ threadId: 5, isCallingCharactersTurn: false, isQueued: false },
	// four queued
	{ threadId: 6, isCallingCharactersTurn: true, isQueued: true },
	{ threadId: 7, isCallingCharactersTurn: false, isQueued: true },
	{ threadId: 8, isCallingCharactersTurn: true, isQueued: true },
	{ threadId: 9, isCallingCharactersTurn: false, isQueued: true },
	// three archived
	{ threadId: 10, isCallingCharactersTurn: false, isQueued: false },
	{ threadId: 11, isCallingCharactersTurn: true, isQueued: false },
	{ threadId: 12, isCallingCharactersTurn: false, isQueued: true }
];
const getThreads = () => [
	{ threadId: 1 },
	{ threadId: 2 },
	{ threadId: 3 },
	{ threadId: 4 },
	{ threadId: 5 },
	{ threadId: 6 },
	{ threadId: 7 },
	{ threadId: 8 },
	{ threadId: 9 },
	{ threadId: 10, isArchived: true },
	{ threadId: 11, isArchived: true },
	{ threadId: 12, isArchived: true }
];

describe('behavior', () => {
	it('should return empty array if no turn filter', () => {
		// Arrange
		const view = { id: '12345' };
		// Act
		const result = filterPublicStatusesByTurnFilter(getStatuses(), getThreads(), view);
		// Assert
		expect(result).toHaveLength(0);
	});
	it('should return empty array if no properties on turn filter', () => {
		// Arrange
		const view = { id: '12345', turnFilter: {} };
		// Act
		const result = filterPublicStatusesByTurnFilter(getStatuses(), getThreads(), view);
		// Assert
		expect(result).toHaveLength(0);
	});
	it('should return my turn threads', () => {
		// Arrange
		const view = { id: '12345', turnFilter: { includeMyTurn: true } };
		// Act
		const result = filterPublicStatusesByTurnFilter(getStatuses(), getThreads(), view);
		// Assert
		expect(result).toHaveLength(2);
	});
	it('should return their turn threads', () => {
		// Arrange
		const view = { id: '12345', turnFilter: { includeTheirTurn: true } };
		// Act
		const result = filterPublicStatusesByTurnFilter(getStatuses(), getThreads(), view);
		// Assert
		expect(result).toHaveLength(3);
	});
	it('should return queued threads', () => {
		// Arrange
		const view = { id: '12345', turnFilter: { includeQueued: true } };
		// Act
		const result = filterPublicStatusesByTurnFilter(getStatuses(), getThreads(), view);
		// Assert
		expect(result).toHaveLength(4);
	});
	it('should return archived threads', () => {
		// Arrange
		const view = { id: '12345', turnFilter: { includeArchived: true } };
		// Act
		const result = filterPublicStatusesByTurnFilter(getStatuses(), getThreads(), view);
		// Assert
		expect(result).toHaveLength(3);
	});
	it('should return combination', () => {
		// Arrange
		const view = { id: '12345', turnFilter: { includeArchived: true, includeQueued: true, includeTheirTurn: true } };
		// Act
		const result = filterPublicStatusesByTurnFilter(getStatuses(), getThreads(), view);
		// Assert
		expect(result).toHaveLength(10);
	});
});
