import _queueColumns from '../_queueColumns';

jest.mock('../../../../shared/columns', () => ({
	TagsButton: () => ({
		title: 'TagsButton'
	}),
	DeleteButton: (title) => ({
		title
	}),
	EditButton: (title) => ({
		title
	}),
	ArchiveButton: (isArchive) => ({
		isArchive
	}),
	QueueButton: (isQueue) => ({
		isQueue
	}),
	ThreadTitle: (displayFilter) => ({
		title: 'ThreadTitle',
		displayFilter
	}),
	Character: (characters, displayFilter) => ({
		characters,
		displayFilter
	}),
	LastPoster: (lastPosters, displayFilter) => ({
		lastPosters,
		displayFilter
	}),
	LastPostDate: () => ({
		title: 'LastPostDate'
	}),
	DateQueued: () => ({
		title: 'DateQueued'
	}),
	TrackedPartner: (partners, displayFilter) => ({
		partners,
		displayFilter
	})
}));

describe('data', () => {
	it('should populate the required columns', () => {
		const characters = [{}, {}, {}];
		const lastPosters = ['partner1', 'partner2'];
		const partners = ['partner1', 'partner2', 'partner3'];
		const columns = _queueColumns(characters, partners, lastPosters);
		expect(columns).toHaveLength(11);
		expect(columns).toContainEqual({
			title: 'TagsButton'
		});
		expect(columns).toContainEqual({
			title: 'Untrack Thread'
		});
		expect(columns).toContainEqual({
			title: 'Edit Thread'
		});
		expect(columns).toContainEqual({
			isArchive: undefined
		});
		expect(columns).toContainEqual({
			isQueue: true
		});
		expect(columns).toContainEqual({
			title: 'ThreadTitle',
			displayFilter: true
		});
		expect(columns).toContainEqual({
			characters: [{}, {}, {}],
			displayFilter: true
		});
		expect(columns).toContainEqual({
			lastPosters: ['partner1', 'partner2'],
			displayFilter: true
		});
		expect(columns).toContainEqual({
			title: 'LastPostDate'
		});
		expect(columns).toContainEqual({
			title: 'DateQueued'
		});
		expect(columns).toContainEqual({
			partners: ['partner1', 'partner2', 'partner3'],
			displayFilter: true
		});
	});
});
