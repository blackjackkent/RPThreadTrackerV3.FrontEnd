import * as legacyPublicValues from '../legacyPublicValues';

const getQueryData = overrides => ({
	currentBlog: 'my-blog',
	filteredTag: 'my-tag',
	userId: '1234',
	sortDescending: 'true',
	...overrides
});

describe('legacyPublicSlugs', () => {
	it('should have correct values', () => {
		expect(legacyPublicValues.legacyPublicSlugs).toMatchSnapshot();
	});
});

describe('buildLegacyView', () => {
	it('should build non-dynamic fields', () => {
		const queryData = getQueryData();
		const result = legacyPublicValues.buildLegacyView(queryData);
		expect(result.name).toBe('Untitled');
		expect(result.slug).toBe('legacy');
		expect(result.characterUrlIdentifier).toBe('my-blog');
		expect(result.tags).toEqual(['my-tag']);
		expect(result.userId).toBe('1234');
		expect(result.columns).toEqual([
			'thread.userTitle',
			'status.lastPosterUrlIdentifier',
			'status.lastPostDate',
			'thread.partnerUrlIdentifier'
		]);
	});
	it('should set turnfilter for yourturn slug', () => {
		const queryData = getQueryData();
		const result = legacyPublicValues.buildLegacyView(queryData, 'yourturn');
		expect(result.turnFilter.includeMyTurn).toBe(true);
	});
	it('should set turnfilter for theirturn slug', () => {
		const queryData = getQueryData();
		const result = legacyPublicValues.buildLegacyView(queryData, 'theirturn');
		expect(result.turnFilter.includeTheirTurn).toBe(true);
	});
	it('should set turnfilter for queued slug', () => {
		const queryData = getQueryData();
		const result = legacyPublicValues.buildLegacyView(queryData, 'queued');
		expect(result.turnFilter.includeQueued).toBe(true);
	});
	it('should set turnfilter for archived slug', () => {
		const queryData = getQueryData();
		const result = legacyPublicValues.buildLegacyView(queryData, 'archived');
		expect(result.turnFilter.includeArchived).toBe(true);
	});
	it('should set sort by user title', () => {
		const queryData = getQueryData({ currentOrderBy: 'UserTitle' });
		const result = legacyPublicValues.buildLegacyView(queryData);
		expect(result.sortKey).toBe('thread.userTitle');
	});
	it('should set sort by last post date', () => {
		const queryData = getQueryData({ currentOrderBy: 'LastPostDate' });
		const result = legacyPublicValues.buildLegacyView(queryData);
		expect(result.sortKey).toBe('status.lastPostDate');
	});
	it('should set sort by last poster', () => {
		const queryData = getQueryData({ currentOrderBy: 'LastPosterShortname' });
		const result = legacyPublicValues.buildLegacyView(queryData);
		expect(result.sortKey).toBe('status.lastPosterUrlIdentifier');
	});
	it('should set sort by partner shortname', () => {
		const queryData = getQueryData({ currentOrderBy: 'WatchedShortname' });
		const result = legacyPublicValues.buildLegacyView(queryData);
		expect(result.sortKey).toBe('thread.partnerUrlIdentifier');
	});
	it('should set empty tag array when no tag set', () => {
		const queryData = getQueryData({ filteredTag: null });
		const result = legacyPublicValues.buildLegacyView(queryData);
		expect(result.tags).toEqual([]);
	});
});
