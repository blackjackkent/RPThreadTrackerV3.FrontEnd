// #region imports
import { shallow } from 'enzyme';
import IsOnHiatus from '../IsOnHiatus';
// #endregion imports

describe('data', () => {
	const column = IsOnHiatus();
	it('should be defined', () => {
		expect(column).toBeDefined();
	});
	it('should appear unmuted and with correct text if character is not on hiatus', () => {
		const cellJsx = column.Cell({
			value: false
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).not.toHaveClassName('text-muted');
		expect(cellElement.find('span')).toHaveText('Active');
	});
	it('should appear muted and with correct text if character is on hiatus', () => {
		const cellJsx = column.Cell({
			value: true
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveClassName('text-muted');
		expect(cellElement.find('span')).toHaveText('On Hiatus');
	});
});
