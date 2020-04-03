import filterThreadsByPublicViewFilter from '../filterThreadsByPublicViewFilter';

const getThreads = () => [
	{
		thread: {
			threadId: 1,
			isArchived: true
		},
		status: {
			isQueued: true,
			isCallingCharactersTurn: true
		}
	},
	{
		thread: {
			threadId: 2,
			isArchived: true
		},
		status: {
			isQueued: true,
			isCallingCharactersTurn: false
		}
	},
	{
		thread: {
			threadId: 3,
			isArchived: true
		},
		status: {
			isQueued: false,
			isCallingCharactersTurn: true
		}
	},
	{
		thread: {
			threadId: 4,
			isArchived: true
		},
		status: {
			isQueued: false,
			isCallingCharactersTurn: false
		}
	},
	{
		thread: {
			threadId: 5,
			isArchived: true
		}
	},
	{
		thread: {
			threadId: 6,
			isArchived: false
		},
		status: {
			isQueued: true,
			isCallingCharactersTurn: true
		}
	},
	{
		thread: {
			threadId: 7,
			isArchived: false
		},
		status: {
			isQueued: true,
			isCallingCharactersTurn: false
		}
	},
	{
		thread: {
			threadId: 8,
			isArchived: false
		},
		status: {
			isQueued: false,
			isCallingCharactersTurn: true
		}
	},
	{
		thread: {
			threadId: 9,
			isArchived: false
		},
		status: {
			isQueued: false,
			isCallingCharactersTurn: false
		}
	},
	{
		thread: {
			threadId: 10,
			isArchived: false
		}
	}
];

describe('behavior', () => {
	it('should filter archived threads', () => {
		const threads = getThreads();
		const result = filterThreadsByPublicViewFilter(threads, 'Archived');
		expect(result).toHaveLength(5);
	});
	it('should filter queued threads', () => {
		const threads = getThreads();
		const result = filterThreadsByPublicViewFilter(threads, 'Queued');
		expect(result).toHaveLength(2);
	});
	it('should filter partner threads', () => {
		const threads = getThreads();
		const result = filterThreadsByPublicViewFilter(threads, "Partner's Turn");
		expect(result).toHaveLength(1);
	});
	it('should filter my threads', () => {
		const threads = getThreads();
		const result = filterThreadsByPublicViewFilter(threads, 'My Turn');
		expect(result).toHaveLength(2);
	});
	it('should return all threads with invalid filter', () => {
		const threads = getThreads();
		const result = filterThreadsByPublicViewFilter(threads, 'Test');
		expect(result).toHaveLength(10);
	});
});
