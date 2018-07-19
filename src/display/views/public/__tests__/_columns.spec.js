// #region imports
import { shallow } from 'enzyme';
import _columns from '../_columns';
// #endregion imports

jest.mock('../../../shared/columns', () => ({
	EditButton: title => ({ title }),
	ToggleHiatusButton: () => ({ title: 'ToggleHiatusButton' }),
	DeleteButton: title => ({ title }),
	CharacterName: () => ({ title: 'CharacterName' }),
	UrlIdentifier: () => ({ title: 'UrlIdentifier' }),
	PlatformId: () => ({ title: 'PlatformId' }),
	IsOnHiatus: () => ({ title: 'IsOnHiatus' })
}));

describe('data', () => {
	describe('column logic', () => {
		it('should return a column for each valid column ID passed in', () => {
			const columnIds = ['thread.userTitle', 'thread.character.urlIdentifier', 'invalidColumn'];
			const columns = _columns(columnIds);
			expect(columns).toHaveLength(2);
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
	describe('thread title column', () => {
		it('should be returned when thread title column ID is passed', () => {
			const columnIds = ['thread.userTitle'];
			const columns = _columns(columnIds);
			const column = columns[0];
			expect(column.Header).toBe('Thread Title');
			expect(column.accessor).toBe('thread.userTitle');
			expect(column.minWidth).toBe(200);
		});
	});
	describe('character column', () => {
		it('should be returned when character column ID is passed', () => {
			const columnIds = ['thread.character.urlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			expect(column.Header).toBe('Character');
			expect(column.accessor).toBe('thread.character.urlIdentifier');
			expect(column.minWidth).toBe(250);
		});
		it('should display character name if it exists', () => {
			const columnIds = ['thread.character.urlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: { thread: { character: { characterName: 'My Character Name' } } }, value: 'my-character-identifier' });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('my-character-identifier (My Character Name)');
		});
		it('should not display character name if it does not exist', () => {
			const columnIds = ['thread.character.urlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: { thread: { character: {} } }, value: 'my-character-identifier' });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('my-character-identifier');
		});
	});
	describe('last poster column', () => {
		it('should be returned when last poster column ID is passed', () => {
			const columnIds = ['status.LastPosterUrlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			expect(column.Header).toBe('Last Poster');
			expect(column.accessor).toBe('status.LastPosterUrlIdentifier');
			expect(column.minWidth).toBe(250);
			expect(column.filterable).toBe(false);
		});
		it('should have cell with empty span if last poster does not exist', () => {
			const columnIds = ['status.LastPosterUrlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: { status: {} } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('');
		});
		it('should have cell link with empty href if status does not exist', () => {
			const columnIds = ['status.LastPosterUrlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: {}, value: 'my-partner-identifier' });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('a')).toHaveText('my-partner-identifier ');
			expect(cellElement.find('a').props().href).not.toBeDefined();
			expect(cellElement.find('i')).toHaveClassName('fa-external-link-alt');
		});
		it('should have cell link with empty href if last post url does not exist', () => {
			const columnIds = ['status.LastPosterUrlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: { status: {} }, value: 'my-partner-identifier' });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('a')).toHaveText('my-partner-identifier ');
			expect(cellElement.find('a').props().href).not.toBeDefined();
			expect(cellElement.find('i')).toHaveClassName('fa-external-link-alt');
		});
		it('should have cell link with last post href if last post url exists', () => {
			const columnIds = ['status.LastPosterUrlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: { status: { LastPostUrl: 'http://www.url.com' } }, value: 'my-partner-identifier' });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('a')).toHaveText('my-partner-identifier ');
			expect(cellElement.find('a').props().href).toBe('http://www.url.com');
			expect(cellElement.find('i')).toHaveClassName('fa-external-link-alt');
		});
	});
	describe('last post date column', () => {
		it('should be returned when last post date column ID is passed', () => {
			const columnIds = ['status.LastPostDate'];
			const columns = _columns(columnIds);
			const column = columns[0];
			expect(column.Header).toBe('Last Post Date');
			expect(column.accessor).toBe('status.LastPostDate');
			expect(column.minWidth).toBe(200);
			expect(column.filterable).toBe(false);
		});
		it('should display Awaiting Starter if status does not exist and thread is not archived', () => {
			const columnIds = ['status.LastPostDate'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: { thread: {} } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('Awaiting Starter');
		});
		it('should display Archived if status does not exist and thread is archived', () => {
			const columnIds = ['status.LastPostDate'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: { thread: { isArchived: true } } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('Archived');
		});
		it('should display Not Found if LastPostDate is null', () => {
			const columnIds = ['status.LastPostDate'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: { status: {} } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('Post Not Found');
		});
		it('should display formatted date if LastPostDate is present', () => {
			const columnIds = ['status.LastPostDate'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ original: { status: { LastPostDate: '1989-06-05 15:42' } } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('time')).toHaveText('June 5, 1989 3:42PM');
		});
	});
	describe('tracked partner column', () => {
		it('should be returned when tracked partner column ID is passed', () => {
			const columnIds = ['thread.partnerUrlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			expect(column.Header).toBe('Tracked Partner');
			expect(column.accessor).toBe('thread.partnerUrlIdentifier');
			expect(column.minWidth).toBe(200);
			expect(column.filterable).toBe(false);
		});
		it('should have cell with empty span if tracked partner does not exist', () => {
			const columnIds = ['thread.partnerUrlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({});
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('');
		});
		it('should have cell with partner shortname if partner does exist', () => {
			const columnIds = ['thread.partnerUrlIdentifier'];
			const columns = _columns(columnIds);
			const column = columns[0];
			const cellJsx = column.Cell({ value: 'my-partner' });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('my-partner');
		});
	});
});
