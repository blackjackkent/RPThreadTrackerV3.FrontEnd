// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
// #endregion imports

// #region mocks
jest.mock('../components', () => ({
	HeaderLogoBlock: () => 'HeaderLogoBlock',
	HeaderAsideToggle: () => 'HeaderAsideToggle',
	HeaderProfileDropdown: () => 'HeaderProfileDropdown',
	HeaderAddMenuDropdown: () => 'HeaderAddMenuDropdown'
}));
// #endregion mocks

const createTestProps = (propOverrides) => ({
	asideToggle: jest.fn(),
	headerProfileDropdownToggle: jest.fn(),
	headerAddMenuDropdownToggle: jest.fn(),
	isHeaderProfileDropdownOpen: true,
	isHeaderAddMenuDropdownOpen: true,
	logout: jest.fn(),
	mobileSidebarToggle: jest.fn(),
	newsUnreadCount: 2,
	openUpsertCharacterModal: jest.fn(),
	openNewThreadModal: jest.fn(),
	navigateToSettings: jest.fn(),
	navigateToTools: jest.fn(),
	navigateToHelp: jest.fn(),
	sidebarToggle: jest.fn(),
	isSidebarOpen: true,
	isMobileSidebarOpen: true,
	isNewsAsideOpen: true,
	user: {
		id: '12345'
	},
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <Header {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
