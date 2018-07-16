// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../../config/tests/helpers.unit';
import HeaderProfileDropdown from '../HeaderProfileDropdown';
// #endregion imports

jest.mock('../HeaderDropdownItem', () => 'HeaderDropdownItem');

const createTestProps = propOverrides => ({
	headerProfileDropdownToggle: jest.fn(),
	isHeaderProfileDropdownOpen: true,
	navigateToSettings: jest.fn(),
	navigateToTools: jest.fn(),
	navigateToHelp: jest.fn(),
	logout: jest.fn(),
	user: { id: '12345', userName: 'test-username' },
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<HeaderProfileDropdown {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when dropdown is closed', () => {
			const props = createTestProps({ isHeaderProfileDropdownOpen: false });
			const jsx = (<HeaderProfileDropdown {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('dropdown', () => {
		it('should be visible when isHeaderProfileDropdownOpen is true', () => {
			const props = createTestProps();
			const jsx = (<HeaderProfileDropdown {...props} />);
			const element = shallow(jsx);
			const menu = getSpecWrapper(element, 'header-dropdown-menu');
			expect(menu).toHaveClassName('show');
		});
		it('should be hidden when isHeaderProfileDropdownOpen is false', () => {
			const props = createTestProps({ isHeaderProfileDropdownOpen: false });
			const jsx = (<HeaderProfileDropdown {...props} />);
			const element = shallow(jsx);
			const menu = getSpecWrapper(element, 'header-dropdown-menu');
			expect(menu).not.toHaveClassName('show');
		});
	});
});

describe('behavior', () => {
	describe('navigateToSettings', () => {
		it('should be called when settings link is clicked', () => {
			const navigateToSettings = jest.fn();
			const props = createTestProps({ navigateToSettings });
			const jsx = (<HeaderProfileDropdown {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'header-dropdown-account-settings-link');
			button.simulate('click');
			expect(navigateToSettings).toHaveBeenCalledTimes(1);
		});
	});
	describe('navigateToTools', () => {
		it('should be called when tools link is clicked', () => {
			const navigateToTools = jest.fn();
			const props = createTestProps({ navigateToTools });
			const jsx = (<HeaderProfileDropdown {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'header-dropdown-tools-link');
			button.simulate('click');
			expect(navigateToTools).toHaveBeenCalledTimes(1);
		});
	});
	describe('navigateToHelp', () => {
		it('should be called when help link is clicked', () => {
			const navigateToHelp = jest.fn();
			const props = createTestProps({ navigateToHelp });
			const jsx = (<HeaderProfileDropdown {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'header-dropdown-help-link');
			button.simulate('click');
			expect(navigateToHelp).toHaveBeenCalledTimes(1);
		});
	});
	describe('logout', () => {
		it('should be called when logout link is clicked', () => {
			const logout = jest.fn();
			const props = createTestProps({ logout });
			const jsx = (<HeaderProfileDropdown {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'header-dropdown-logout-link');
			button.simulate('click');
			expect(logout).toHaveBeenCalledTimes(1);
			expect(logout).toHaveBeenCalledWith();
		});
	});
});
