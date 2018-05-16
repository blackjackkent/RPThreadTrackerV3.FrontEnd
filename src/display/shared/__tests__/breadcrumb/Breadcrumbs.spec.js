// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumbs from '../../breadcrumb/Breadcrumbs';
// #endregion imports

jest.mock('../../breadcrumb/BreadcrumbsItem', () => () => 'BreadcrumbsItem');

const createTestProps = propOverrides => ({
	location: { pathname: '' },
	...propOverrides
});
describe('rendering', () => {
	it('should render valid snapshot with empty string', () => {
		const props = createTestProps();
		const jsx = (<Breadcrumbs {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with root path', () => {
		const props = createTestProps({ location: { pathname: '/' } });
		const jsx = (<Breadcrumbs {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with one segment path', () => {
		const props = createTestProps({ location: { pathname: '/test' } });
		const jsx = (<Breadcrumbs {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with more than one segment path', () => {
		const props = createTestProps({ location: { pathname: '/test/test2' } });
		const jsx = (<Breadcrumbs {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render item for each route segment', () => {
		const props = createTestProps({ location: { pathname: '/test/test2' } });
		const jsx = (<Breadcrumbs {...props} />);
		const element = shallow(jsx);
		const routes = element.find('Route');
		expect(routes).toHaveLength(3);
	});
});

describe('getPaths', () => {
	it('should return root path for empty string', () => {
		const props = createTestProps();
		const element = shallow(<Breadcrumbs {...props} />);
		const paths = element.instance().getPaths('');
		expect(paths).toHaveLength(1);
		expect(paths).toContain('/');
	});
	it('should return root path for root path', () => {
		const props = createTestProps();
		const element = shallow(<Breadcrumbs {...props} />);
		const paths = element.instance().getPaths('/');
		expect(paths).toHaveLength(1);
		expect(paths).toContain('/');
	});
	it('should return array for one segment path', () => {
		const props = createTestProps();
		const element = shallow(<Breadcrumbs {...props} />);
		const paths = element.instance().getPaths('/test');
		expect(paths).toHaveLength(2);
		expect(paths).toContain('/');
		expect(paths).toContain('/test');
	});
	it('should return array for more than one segment path', () => {
		const props = createTestProps();
		const element = shallow(<Breadcrumbs {...props} />);
		const paths = element.instance().getPaths('/test/test2');
		expect(paths).toHaveLength(3);
		expect(paths).toContain('/');
		expect(paths).toContain('/test');
		expect(paths).toContain('/test/test2');
	});
});
