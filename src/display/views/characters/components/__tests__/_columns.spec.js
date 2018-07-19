import _columns from '../_columns';

jest.mock('../../../../shared/columns', () => ({
	EditButton: title => ({ title }),
	ToggleHiatusButton: () => ({ title: 'ToggleHiatusButton' }),
	DeleteButton: title => ({ title }),
	CharacterName: () => ({ title: 'CharacterName' }),
	UrlIdentifier: () => ({ title: 'UrlIdentifier' }),
	PlatformId: () => ({ title: 'PlatformId' }),
	IsOnHiatus: () => ({ title: 'IsOnHiatus' })
}));

describe('data', () => {
	it('should populate the required columns', () => {
		const columns = _columns;
		expect(columns).toHaveLength(7);
		expect(columns).toContainEqual({ title: 'Edit Character' });
		expect(columns).toContainEqual({ title: 'ToggleHiatusButton' });
		expect(columns).toContainEqual({ title: 'Untrack Character' });
		expect(columns).toContainEqual({ title: 'CharacterName' });
		expect(columns).toContainEqual({ title: 'UrlIdentifier' });
		expect(columns).toContainEqual({ title: 'PlatformId' });
		expect(columns).toContainEqual({ title: 'IsOnHiatus' });
	});
});
