// #region imports
import { shallow } from 'enzyme';
import ThreadTitle from '../ThreadTitle';
// #endregion imports

describe('data', () => {
	it('should be defined', () => {
		const column = ThreadTitle();
		expect(column).toBeDefined();
	});
	it('should be configured properly', () => {
		const column = ThreadTitle();
		expect(column).toHaveProperty('Header', 'Thread Title');
		expect(column).toHaveProperty('accessor', 'thread.userTitle');
		expect(column).toHaveProperty('minWidth', 200);
		expect(column).toHaveProperty('sortable', true);
		expect(column).toHaveProperty('resizable', true);
	});
	it('should allow filtering when includeFilter is true', () => {
		const column = ThreadTitle(true);
		expect(column).toHaveProperty('filterable', true);
	});
	it('should not allow filtering when includeFilter is false', () => {
		const column = ThreadTitle(false);
		expect(column).toHaveProperty('filterable', false);
	});
	it('should display cell with title and text', () => {
		const column = ThreadTitle(false);
		const cellJsx = column.Cell({
			value: 'My Thread'
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveProp('title', 'My Thread');
		expect(cellElement.find('span')).toHaveText('My Thread');
	});
});
