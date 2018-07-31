// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import BreadcrumbsItem from '../BreadcrumbsItem';
// #endregion imports

jest.mock('../_routes', () => ({
	'/test': 'Test Page',
	'/test/test2': 'Test 2 Page'
}));

const createTestProps = propOverrides => ({
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot if route does not exist', () => {
			const props = createTestProps({ match: { url: '/test/test3' } });
			const jsx = (<BreadcrumbsItem {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot if route is exact', () => {
			const props = createTestProps({ match: { url: '/test/test2', isExact: true } });
			const jsx = (<BreadcrumbsItem {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot if route is not exact', () => {
			const props = createTestProps({ match: { url: '/test/test2', isExact: false } });
			const jsx = (<BreadcrumbsItem {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should render null if route does not exist', () => {
			const props = createTestProps({ match: { url: '/test/test3' } });
			const jsx = (<BreadcrumbsItem {...props} />);
			const element = shallow(jsx);
			expect(element.children('BreadcrumbItem')).toHaveLength(0);
		});
		it('should render without link if route is exact', () => {
			const props = createTestProps({ match: { url: '/test/test2', isExact: true } });
			const jsx = (<BreadcrumbsItem {...props} />);
			const element = shallow(jsx);
			const item = element.find('BreadcrumbItem');
			expect(item).toHaveLength(1);
			expect(item).toHaveProp('children', 'Test 2 Page');
			expect(item.find('Link')).toHaveLength(0);
		});
		it('should render with link if route is not exact', () => {
			const props = createTestProps({ match: { url: '/test/test2', isExact: false } });
			const jsx = (<BreadcrumbsItem {...props} />);
			const element = shallow(jsx);
			const item = element.find('BreadcrumbItem');
			expect(item).toHaveLength(1);
			const link = item.find('Link');
			expect(link).toHaveLength(1);
			expect(link).toHaveProp('children', 'Test 2 Page');
			expect(link).toHaveProp('to', '/test/test2');
			expect(link).toHaveProp('href', '/test/test2');
		});
	});
});
