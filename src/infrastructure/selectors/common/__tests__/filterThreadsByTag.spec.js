import filterThreadsByTag from '../filterThreadsByTag';

const getThreads = () => [
	{},
	{
		thread: {}
	},
	{
		thread: {
			threadId: 1,
			threadTags: [
				{
					tagText: 'tag1'
				},
				{
					tagText: 'tag2'
				}
			]
		}
	},
	{
		thread: {
			threadId: 2,
			threadTags: [
				{
					tagText: 'tag2'
				},
				{
					tagText: 'tag3'
				}
			]
		}
	},
	{
		thread: {
			threadId: 3,
			threadTags: [
				{
					tagText: 'tag3'
				},
				{
					tagText: 'tag4'
				}
			]
		}
	}
];

describe('behavior', () => {
	it('should return initial threads if no tag to filter', () => {
		const threads = getThreads();
		const result = filterThreadsByTag(threads);
		expect(result).toHaveLength(5);
	});
	it('should filter threads that include provided tag', () => {
		const threads = getThreads();
		const result = filterThreadsByTag(threads, 'tag2');
		expect(result).toHaveLength(2);
		expect(result[0].thread.threadId).toBe(1);
		expect(result[1].thread.threadId).toBe(2);
	});
});
