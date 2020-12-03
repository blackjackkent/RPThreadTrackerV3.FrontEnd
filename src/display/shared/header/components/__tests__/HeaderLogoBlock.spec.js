// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import HeaderLogoBlock from '../HeaderLogoBlock';
// #endregion imports

const createTestProps = (propOverrides) => ({
	mobileSidebarToggle: jest.fn(),
	sidebarToggle: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <HeaderLogoBlock {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('sidebarToggle', () => {
		it('should be triggered when sidebar toggler is clicked', () => {
			const sidebarToggle = jest.fn();
			const props = createTestProps({
				sidebarToggle
			});
			const jsx = <HeaderLogoBlock {...props} />;
			const element = shallow(jsx);
			const link = getSpecWrapper(element, 'header-logo-block-sidebar-toggler');
			link.simulate('click');
			expect(sidebarToggle).toHaveBeenCalledTimes(1);
		});
	});
	describe('mobileSidebarToggle', () => {
		it('should be triggered when mobile sidebar toggler is clicked', () => {
			const mobileSidebarToggle = jest.fn();
			const props = createTestProps({
				mobileSidebarToggle
			});
			const jsx = <HeaderLogoBlock {...props} />;
			const element = shallow(jsx);
			const link = getSpecWrapper(element, 'header-logo-block-mobile-toggler');
			link.simulate('click');
			expect(mobileSidebarToggle).toHaveBeenCalledTimes(1);
		});
	});
});
