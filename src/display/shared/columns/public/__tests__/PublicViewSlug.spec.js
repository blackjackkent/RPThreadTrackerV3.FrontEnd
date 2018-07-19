// #region imports
import { shallow } from 'enzyme';
import PublicViewSlug from '../PublicViewSlug';
// #endregion imports

describe('data', () => {
	const column = PublicViewSlug();
	it('should be configured correctly', () => {
		expect(column.Header).toBe('View Slug');
		expect(column.accessor).toBe('slug');
	});
	it('should display cell with URL, slug, and icon', () => {
		const cellJsx = column.Cell({ original: { url: 'http://www.url.com' }, value: 'my-slug' });
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('a')).toHaveProp('href', 'http://www.url.com');
		expect(cellElement.find('a')).toHaveText('my-slug');
		expect(cellElement.find('i')).toHaveClassName('fa-external-link-alt');
	});
});
