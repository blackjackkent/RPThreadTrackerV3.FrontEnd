// #region imports
import { shallow } from 'enzyme';
import ToggleHiatusButton from '../ToggleHiatusButton';
// #endregion imports

describe('data', () => {
	const column = ToggleHiatusButton();
	it('should be defined', () => {
		expect(column).toBeDefined();
		expect(column.id).toBe('toggleHiatusButton');
	});
	it('should have cell with font-awesome element and correct title when character is on hiatus', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: true
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('i')).toHaveClassName('fa-power-off');
		expect(cellElement.find('i')).toHaveProp('title', 'Remove From Hiatus');
	});
	it('should have cell with font-awesome element and correct title when character is not on hiatus', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: false
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('i')).toHaveClassName('fa-power-off');
		expect(cellElement.find('i')).toHaveProp('title', 'Set On Hiatus');
	});
	it('should be configured', () => {
		expect(column.width).toBe(30);
		expect(column.sortable).toBe(false);
		expect(column.resizable).toBe(false);
		expect(column.filterable).toBe(false);
	});
});
