// #region imports
import { shallow } from 'enzyme';
import TagsButton from '../TagsButton';
// #endregion imports

describe('data', () => {
	const column = TagsButton();
	it('should be defined', () => {
		expect(column).toBeDefined();
	});
	it('should have expander with font-awesome element and correct title', () => {
		const cellJsx = column.Expander();
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('i')).toHaveClassName('fa-info-circle');
	});
	it('should be configured', () => {
		expect(column.width).toBe(30);
		expect(column.sortable).toBe(false);
		expect(column.resizable).toBe(false);
		expect(column.filterable).toBe(false);
	});
});
