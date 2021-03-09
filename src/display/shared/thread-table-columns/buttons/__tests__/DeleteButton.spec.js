// #region imports
import { shallow } from 'enzyme';
import DeleteButton from '../DeleteButton';
// #endregion imports

describe('data', () => {
	const column = DeleteButton('Delete Test');
	it('should be defined', () => {
		expect(column).toBeDefined();
		expect(column.id).toBe('deleteButton');
	});
	it('should have cell with font-awesome element and correct title', () => {
		const cellJsx = column.Cell();
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('i')).toHaveClassName('fa-trash-alt');
		expect(cellElement.find('i')).toHaveProp('title', 'Delete Test');
	});
	it('should be configured', () => {
		expect(column.width).toBe(30);
		expect(column.sortable).toBe(false);
		expect(column.resizable).toBe(false);
		expect(column.filterable).toBe(false);
	});
});
