// #region imports
import _columns from '../_columns';
// #endregion imports

jest.mock('../../../shared/columns', () => ({
	ThreadTitle: () => ({ title: 'ThreadTitle' }),
	Character: () => ({ title: 'Character' }),
	LastPoster: () => ({ title: 'LastPoster' }),
	LastPostDate: () => ({ title: 'LastPostDate' }),
	TrackedPartner: () => ({ title: 'TrackedPartner' })
}));

describe('data', () => {
	describe('column logic', () => {
		it('should return a column for each valid column ID passed in', () => {
			const columnIds = [
				'thread.userTitle',
				'thread.character.urlIdentifier',
				'status.LastPosterUrlIdentifier',
				'status.LastPostDate',
				'thread.partnerUrlIdentifier',
				'invalidColumn'
			];
			const columns = _columns(columnIds);
			expect(columns).toHaveLength(5);
		});
		it('should return empty array when no column IDs provided', () => {
			const columnIds = null;
			const columns = _columns(columnIds);
			expect(columns).toHaveLength(0);
		});
		it('should return empty array when empty column IDs provided', () => {
			const columnIds = [];
			const columns = _columns(columnIds);
			expect(columns).toHaveLength(0);
		});
		it('should return empty array when only invalid column IDs provided', () => {
			const columnIds = ['invalidColumn1', 'invalidColumn2'];
			const columns = _columns(columnIds);
			expect(columns).toHaveLength(0);
		});
	});
});
