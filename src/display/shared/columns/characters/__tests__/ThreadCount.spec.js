// #region imports
import { shallow } from 'enzyme';
import ThreadCount from '../ThreadCount';
// #endregion imports

describe('data', () => {
	const characterThreadCounts = {
		1: 15,
		2: 30
	};
	const column = ThreadCount(characterThreadCounts);
	it('should be defined', () => {
		expect(column).toBeDefined();
	});
	it('should have id', () => {
		expect(column).toHaveProperty('id', 'threadCount');
	});
	it('should have header', () => {
		expect(column).toHaveProperty('Header', 'Thread Count');
	});
	it('should generate accessor from character props', () => {
		const value = column.accessor({
			characterId: 1,
			characterName: 'My Character',
			urlIdentifier: 'my-url-identifier'
		});
		expect(value).toBe(15);
	});
	it('should appear unmuted if character is not on hiatus', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: false
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).not.toHaveClassName('text-muted');
	});
	it('should appear muted if character is on hiatus', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: true
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveClassName('text-muted');
	});
	it('should display thread count if thread count is defined for character', () => {
		const cellJsx = column.Cell({
			original: {
				characterId: 1
			},
			value: 15
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('15');
	});
	it('should display thread count if thread count is not defined for character', () => {
		const cellJsx = column.Cell({
			original: {
				characterId: 3
			},
			value: undefined
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('0');
	});
});
