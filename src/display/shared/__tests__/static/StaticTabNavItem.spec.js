// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import StaticTabNavItem from '../../static/StaticTabNavItem';
// #endregion imports

const createTestProps = propOverrides => ({
	tabId: 'mock-tab',
	activeTab: 'active-tab',
	setActiveTab: jest.fn(),
	title: 'Mock Tab',
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<StaticTabNavItem {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot if tab is active', () => {
			const props = createTestProps({ tabId: 'active-tab' });
			const jsx = (<StaticTabNavItem {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('initial load', () => {
		it('should not have active class if tab is not active', () => {
			const props = createTestProps();
			const jsx = (<StaticTabNavItem {...props} />);
			const element = shallow(jsx);
			const navLink = getSpecWrapper(element, 'static-tab-nav-item-navlink');
			expect(navLink).not.toHaveClassName('active');
		});
		it('should have active class if tab is active', () => {
			const props = createTestProps({ tabId: 'active-tab' });
			const jsx = (<StaticTabNavItem {...props} />);
			const element = shallow(jsx);
			const navLink = getSpecWrapper(element, 'static-tab-nav-item-navlink');
			expect(navLink).toHaveClassName('active');
		});
	});
});

describe('behavior', () => {
	describe('setActiveTab', () => {
		it('should be triggered with tab ID on click', () => {
			const setActiveTab = jest.fn();
			const props = createTestProps({ setActiveTab });
			const mockEvent = { preventDefault: jest.fn() };
			const jsx = (<StaticTabNavItem {...props} />);
			const element = shallow(jsx);
			const navLink = getSpecWrapper(element, 'static-tab-nav-item-navlink');
			navLink.simulate('click', mockEvent);
			expect(setActiveTab).toHaveBeenCalledTimes(1);
			expect(setActiveTab).toHaveBeenLastCalledWith('mock-tab');
		});
	});
});
