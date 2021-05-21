// #region imports
import { shallow } from 'enzyme';
import PublicViewSlug from '../PublicViewSlug';
// #endregion imports

describe('data', () => {
	const column = PublicViewSlug('test-user');
	it('should be configured correctly', () => {
		expect(column.Header).toBe('View Slug');
		expect(column.accessor).toBe('slug');
	});
	it('should display cell with URL, slug, and icon', () => {
		const cellJsx = column.Cell({
			value: 'my-slug'
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('a')).toHaveProp('href', '/public/test-user/my-slug');
		expect(cellElement.find('a')).toHaveText('my-slug');
		expect(cellElement.find('i')).toHaveClassName('fa-external-link-alt');
	});
});
