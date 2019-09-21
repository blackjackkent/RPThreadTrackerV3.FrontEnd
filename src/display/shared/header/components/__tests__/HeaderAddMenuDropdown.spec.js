// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import HeaderAddMenuDropdown from '../HeaderAddMenuDropdown';
// #endregion imports

jest.mock('../HeaderDropdownItem', () => 'HeaderDropdownItem');

const createTestProps = propOverrides => ({
	headerAddMenuDropdownToggle: jest.fn(),
	isHeaderAddMenuDropdownOpen: true,
	logout: jest.fn(),
	openUpsertCharacterModal: jest.fn(),
	openNewThreadModal: jest.fn(),
	user: { id: '12345', userName: 'test-username' },
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<HeaderAddMenuDropdown {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when dropdown is closed', () => {
			const props = createTestProps({ isHeaderAddMenuDropdownOpen: false });
			const jsx = (<HeaderAddMenuDropdown {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('dropdown', () => {
		it('should be visible when isHeaderAddMenuDropdownOpen is true', () => {
			const props = createTestProps();
			const jsx = (<HeaderAddMenuDropdown {...props} />);
			const element = shallow(jsx);
			const menu = getSpecWrapper(element, 'header-dropdown-menu');
			expect(menu).toHaveClassName('show');
		});
		it('should be hidden when isHeaderAddMenuDropdownOpen is false', () => {
			const props = createTestProps({ isHeaderAddMenuDropdownOpen: false });
			const jsx = (<HeaderAddMenuDropdown {...props} />);
			const element = shallow(jsx);
			const menu = getSpecWrapper(element, 'header-dropdown-menu');
			expect(menu).not.toHaveClassName('show');
		});
	});
});

describe('behavior', () => {
	describe('openUpsertCharacterModal', () => {
		it('should be called when upsert character modal link is clicked', () => {
			const openUpsertCharacterModal = jest.fn();
			const props = createTestProps({ openUpsertCharacterModal });
			const jsx = (<HeaderAddMenuDropdown {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'header-dropdown-upsert-character-link');
			button.simulate('click');
			expect(openUpsertCharacterModal).toHaveBeenCalledTimes(1);
			expect(openUpsertCharacterModal).toHaveBeenCalledWith();
		});
	});
	describe('openNewThreadModal', () => {
		it('should be called when upsert thread modal link is clicked', () => {
			const openNewThreadModal = jest.fn();
			const props = createTestProps({ openNewThreadModal });
			const jsx = (<HeaderAddMenuDropdown {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'header-dropdown-upsert-thread-link');
			button.simulate('click');
			expect(openNewThreadModal).toHaveBeenCalledTimes(1);
			expect(openNewThreadModal).toHaveBeenCalledWith();
		});
	});
});
