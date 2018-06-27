// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import HeaderDropdown from '../../header/components/HeaderDropdown';
// #endregion imports

jest.mock('../../header/components/HeaderDropdownItem', () => 'HeaderDropdownItem');

const createTestProps = propOverrides => ({
	headerDropdownToggle: jest.fn(),
	isHeaderDropdownOpen: true,
	logout: jest.fn(),
	openUpsertCharacterModal: jest.fn(),
	openNewThreadModal: jest.fn(),
	user: { id: '12345', userName: 'test-username' },
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<HeaderDropdown {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot when dropdown is closed', () => {
		const props = createTestProps({ isHeaderDropdownOpen: false });
		const jsx = (<HeaderDropdown {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should show dropdown when isHeaderDropdownOpen is true', () => {
		const props = createTestProps();
		const jsx = (<HeaderDropdown {...props} />);
		const element = shallow(jsx);
		const menu = getSpecWrapper(element, 'header-dropdown-menu');
		expect(menu).toHaveClassName('show');
	});
	it('should hide dropdown when isHeaderDropdownOpen is false', () => {
		const props = createTestProps({ isHeaderDropdownOpen: false });
		const jsx = (<HeaderDropdown {...props} />);
		const element = shallow(jsx);
		const menu = getSpecWrapper(element, 'header-dropdown-menu');
		expect(menu).not.toHaveClassName('show');
	});
});

describe('behavior', () => {
	it('should call passed handler when upsert character modal link is clicked', () => {
		const openUpsertCharacterModal = jest.fn();
		const props = createTestProps({ openUpsertCharacterModal });
		const jsx = (<HeaderDropdown {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'header-dropdown-upsert-character-link');
		button.simulate('click');
		expect(openUpsertCharacterModal).toHaveBeenCalledTimes(1);
		expect(openUpsertCharacterModal).toHaveBeenCalledWith();
	});
	it('should call passed handler when upsert thread modal link is clicked', () => {
		const openNewThreadModal = jest.fn();
		const props = createTestProps({ openNewThreadModal });
		const jsx = (<HeaderDropdown {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'header-dropdown-upsert-thread-link');
		button.simulate('click');
		expect(openNewThreadModal).toHaveBeenCalledTimes(1);
		expect(openNewThreadModal).toHaveBeenCalledWith();
	});
	it('should call passed handler when logout link is clicked', () => {
		const logout = jest.fn();
		const props = createTestProps({ logout });
		const jsx = (<HeaderDropdown {...props} />);
		const element = shallow(jsx);
		const button = getSpecWrapper(element, 'header-dropdown-logout-link');
		button.simulate('click');
		expect(logout).toHaveBeenCalledTimes(1);
		expect(logout).toHaveBeenCalledWith();
	});
});
