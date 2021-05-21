// #region imports
import { shallow } from 'enzyme';
import ArchiveButton from '../ArchiveButton';
// #endregion imports

describe('data', () => {
	const archivePageColumn = ArchiveButton(true);
	const nonArchivePageColumn = ArchiveButton();
	it('should be defined', () => {
		expect(archivePageColumn).toBeDefined();
		expect(archivePageColumn.id).toBe('archiveButton');
		expect(nonArchivePageColumn).toBeDefined();
		expect(nonArchivePageColumn.id).toBe('archiveButton');
	});
	it('should have cell with font-awesome element and correct title when on archive page', () => {
		const cellJsx = archivePageColumn.Cell();
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('i')).toHaveClassName('fa-unlock');
		expect(cellElement.find('i')).toHaveProp('title', 'Unarchive Thread');
	});
	it('should have cell with font-awesome element and correct title when not on archive page', () => {
		const cellJsx = nonArchivePageColumn.Cell();
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('i')).toHaveClassName('fa-lock');
		expect(cellElement.find('i')).toHaveProp('title', 'Archive Thread');
	});
	it('should be configured', () => {
		expect(archivePageColumn.width).toBe(30);
		expect(archivePageColumn.sortable).toBe(false);
		expect(archivePageColumn.resizable).toBe(false);
		expect(archivePageColumn.filterable).toBe(false);
	});
});
