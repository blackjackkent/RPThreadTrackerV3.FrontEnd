import _columns from '../_columns';

jest.mock('../../../../shared/columns', () => ({
	EditButton: title => ({ title }),
	ToggleHiatusButton: () => ({ title: 'ToggleHiatusButton' }),
	DeleteButton: title => ({ title }),
	CharacterName: () => ({ title: 'CharacterName' }),
	UrlIdentifier: () => ({ title: 'UrlIdentifier' }),
	ThreadCount: threadCounts => ({ threadCounts }),
	PlatformId: () => ({ title: 'PlatformId' }),
	IsOnHiatus: () => ({ title: 'IsOnHiatus' })
}));

describe('data', () => {
	it('should populate the required columns', () => {
		const threadCounts = { 5: 10, 15: 20 };
		const columns = _columns(threadCounts);
		expect(columns).toHaveLength(8);
		expect(columns).toContainEqual({ title: 'Edit Character' });
		expect(columns).toContainEqual({ title: 'ToggleHiatusButton' });
		expect(columns).toContainEqual({ title: 'Untrack Character' });
		expect(columns).toContainEqual({ title: 'CharacterName' });
		expect(columns).toContainEqual({ title: 'UrlIdentifier' });
		expect(columns).toContainEqual({ threadCounts: { 5: 10, 15: 20 } });
		expect(columns).toContainEqual({ title: 'PlatformId' });
		expect(columns).toContainEqual({ title: 'IsOnHiatus' });
	});
});
