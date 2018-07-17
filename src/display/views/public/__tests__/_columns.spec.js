// #region imports
import { shallow } from 'enzyme';
import _columns from '../_columns';
// #endregion imports

describe('data', () => {
	describe('column logic', () => {
		it('should return a column for each valid column ID passed in', () => {
			const columnIds = ['thread.userTitle', 'thread.character.urlIdentifier', 'invalidColumn'];
			const columns = _columns(columnIds);
			expect(columns).toHaveLength(2);
		});
		it('should return empty array when no column IDs provided', () => {
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
});
