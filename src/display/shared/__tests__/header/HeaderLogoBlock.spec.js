// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import HeaderLogoBlock from '../../header/components/HeaderLogoBlock';
// #endregion imports

const createTestProps = propOverrides => ({
	mobileSidebarToggle: jest.fn(),
	sidebarToggle: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<HeaderLogoBlock {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
});

describe('behavior', () => {
	it('should trigger sidebar handler on click', () => {
		const sidebarToggle = jest.fn();
		const props = createTestProps({ sidebarToggle });
		const jsx = (<HeaderLogoBlock {...props} />);
		const element = shallow(jsx);
		const link = getSpecWrapper(element, 'header-logo-block-sidebar-toggler');
		link.simulate('click');
		expect(sidebarToggle).toHaveBeenCalledTimes(1);
	});
	it('should trigger mobile sidebar handler on click', () => {
		const mobileSidebarToggle = jest.fn();
		const props = createTestProps({ mobileSidebarToggle });
		const jsx = (<HeaderLogoBlock {...props} />);
		const element = shallow(jsx);
		const link = getSpecWrapper(element, 'header-logo-block-mobile-toggler');
		link.simulate('click');
		expect(mobileSidebarToggle).toHaveBeenCalledTimes(1);
	});
});
