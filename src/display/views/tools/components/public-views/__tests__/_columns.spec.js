import _columns from '../_columns';

jest.mock('~/display/shared/columns', () => ({
	EditButton: (title) => ({
		title
	}),
	DeleteButton: (title) => ({
		title
	}),
	PublicViewName: () => ({
		title: 'PublicViewName'
	}),
	PublicViewSlug: () => ({
		title: 'PublicViewSlug'
	})
}));

describe('data', () => {
	it('should populate the required columns', () => {
		const columns = _columns();
		expect(columns).toHaveLength(4);
		expect(columns).toContainEqual({
			title: 'Edit Public View'
		});
		expect(columns).toContainEqual({
			title: 'Delete Public View'
		});
		expect(columns).toContainEqual({
			title: 'PublicViewName'
		});
		expect(columns).toContainEqual({
			title: 'PublicViewSlug'
		});
	});
});
