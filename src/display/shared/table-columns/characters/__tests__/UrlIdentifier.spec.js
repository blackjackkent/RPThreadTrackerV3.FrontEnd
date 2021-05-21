// #region imports
import { shallow } from 'enzyme';
import UrlIdentifier from '../UrlIdentifier';
// #endregion imports

describe('data', () => {
	const column = UrlIdentifier();
	it('should be defined', () => {
		expect(column).toBeDefined();
	});
	it('should have header', () => {
		expect(column).toHaveProperty('Header', 'URL Identifier');
	});
	it('should appear unmuted if character is not on hiatus', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: false
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('a')).not.toHaveClassName('text-muted');
	});
	it('should appear muted if character is on hiatus', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: true
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('a')).toHaveClassName('text-muted');
	});
	it('should display character identifier', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: true
			},
			value: 'my-url-identifier'
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('a')).toHaveText('my-url-identifier');
	});
	it('should link to character home URL', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: true,
				homeUrl: 'http://my-url-identifier.tumblr.com'
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('a')).toHaveProp('href', 'http://my-url-identifier.tumblr.com');
	});
});
