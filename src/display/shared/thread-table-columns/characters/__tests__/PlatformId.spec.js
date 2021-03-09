// #region imports
import { shallow } from 'enzyme';
import PlatformId from '../PlatformId';
// #endregion imports

describe('data', () => {
	const column = PlatformId();
	it('should be defined', () => {
		expect(column).toBeDefined();
	});
	it('should have header', () => {
		expect(column).toHaveProperty('Header', 'Platform');
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
	it('should display platform name', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: true
			},
			value: 1
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('Tumblr');
	});
});
