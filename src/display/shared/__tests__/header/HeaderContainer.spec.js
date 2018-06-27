// #region imports
import React from 'react';
import { shallowWithState } from '../../../../../config/tests/helpers.unit';
import HeaderContainer from '../../header/HeaderContainer';
// #endregion imports

// #region mocks
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getNewsUnreadCount: () => 1,
	getIsLoadingIconVisible: () => true
}));
jest.mock('../../header/Header', () => 'Header');
// #endregion mocks

const createTestProps = propOverrides => ({
	openUpsertCharacterModal: jest.fn(),
	openUpsertThreadModal: jest.fn(),
	submitUserLogout: jest.fn(),
	toggleHeaderDropdown: jest.fn(),
	toggleMobileSidebar: jest.fn(),
	toggleNewsAside: jest.fn(),
	toggleSidebar: jest.fn(),
	updateUserSettings: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	user: { id: '12345' },
	ui: {
		isNewsAsideOpen: true,
		isSidebarOpen: true,
		isHeaderDropdownOpen: true,
		isMobileSidebarOpen: true
	},
	news: [{}, {}],
	userSettings: { settingsId: '54321' },
	...stateOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		expect(element).toMatchSnapshot();
	});
	it('should render method props', () => {
		const props = createTestProps();
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		expect(element.props().mobileSidebarToggle).toBeTruthy();
		expect(element.props().asideToggle).toBeTruthy();
		expect(element.props().headerDropdownToggle).toBeTruthy();
		expect(element.props().sidebarToggle).toBeTruthy();
		expect(element.props().openUpsertCharacterModal).toBeTruthy();
		expect(element.props().openNewThreadModal).toBeTruthy();
		expect(element.props().logout).toBeTruthy();
	});
	it('should render forwarded props', () => {
		const props = createTestProps();
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		expect(element.props().isNewsAsideOpen).toBe(true);
		expect(element.props().isSidebarOpen).toBe(true);
		expect(element.props().isHeaderDropdownOpen).toBe(true);
		expect(element.props().isMobileSidebarOpen).toBe(true);
		expect(element.props().user).toHaveProperty('id', '12345');
		expect(element.props().news).toHaveLength(2);
		expect(element.props().newsUnreadCount).toBe(1);
		expect(element.props().isLoadingIconVisible).toBe(true);
		expect(element.props().userSettings).toHaveProperty('settingsId', '54321');
	});
});

describe('behavior', () => {
	it('should set mobile sidebar visibility class on load and on receive props', () => {
		document.body.classList = [];
		const props = createTestProps();
		const state = createTestState({
			ui: {
				isMobileSidebarOpen: true,
				isSidebarOpen: true,
				isNewsAsideOpen: true
			}
		});
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		expect(document.body.classList).toHaveLength(1);
		expect(document.body.classList).toContain('sidebar-mobile-show');

		element.setProps({ isMobileSidebarOpen: false });
		expect(document.body.classList).toHaveLength(0);
	});
	it('should set sidebar visibility class on load and on receive props', () => {
		document.body.classList = [];
		const props = createTestProps();
		const state = createTestState({
			ui: {
				isMobileSidebarOpen: false,
				isSidebarOpen: false,
				isNewsAsideOpen: true
			}
		});
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		expect(document.body.classList).toHaveLength(1);
		expect(document.body.classList).toContain('sidebar-hidden');

		element.setProps({ isSidebarOpen: true });
		expect(document.body.classList).toHaveLength(0);
	});
	it('should set aside visibility class on load', () => {
		document.body.classList = [];
		const props = createTestProps();
		const state = createTestState({
			ui: {
				isMobileSidebarOpen: false,
				isSidebarOpen: true,
				isNewsAsideOpen: false
			}
		});
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		expect(document.body.classList).toHaveLength(1);
		expect(document.body.classList).toContain('aside-menu-hidden');

		element.setProps({ isNewsAsideOpen: true });
		expect(document.body.classList).toHaveLength(0);
	});
	it('should dispatch sidebar toggle action when sidebarToggle is called', () => {
		const toggleSidebar = jest.fn();
		const props = createTestProps({ toggleSidebar });
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		element.instance().sidebarToggle();
		expect(toggleSidebar).toHaveBeenCalledTimes(1);
	});
	it('should dispatch aside toggle action when asideToggle is called', () => {
		const toggleNewsAside = jest.fn();
		const props = createTestProps({ toggleNewsAside });
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		element.instance().asideToggle();
		expect(toggleNewsAside).toHaveBeenCalledTimes(1);
	});
	it('should dispatch mobile sidebar toggle action when mobileSidebarToggle is called', () => {
		const toggleMobileSidebar = jest.fn();
		const props = createTestProps({ toggleMobileSidebar });
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		element.instance().mobileSidebarToggle();
		expect(toggleMobileSidebar).toHaveBeenCalledTimes(1);
	});
	it('should dispatch header dropdown toggle action when headerDropdownToggle is called', () => {
		const toggleHeaderDropdown = jest.fn();
		const props = createTestProps({ toggleHeaderDropdown });
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		element.instance().headerDropdownToggle();
		expect(toggleHeaderDropdown).toHaveBeenCalledTimes(1);
	});
	it('should dispatch upsert character modal open action when openUpsertCharacterModal is called', () => {
		const openUpsertCharacterModal = jest.fn();
		const props = createTestProps({ openUpsertCharacterModal });
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		element.instance().openUpsertCharacterModal();
		expect(openUpsertCharacterModal).toHaveBeenCalledTimes(1);
	});
	it('should dispatch upsert thread modal open action when openNewThreadModal is called', () => {
		const openUpsertThreadModal = jest.fn();
		const props = createTestProps({ openUpsertThreadModal });
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		element.instance().openNewThreadModal();
		expect(openUpsertThreadModal).toHaveBeenCalledTimes(1);
	});
	it('should dispatch logout action when logout is called', () => {
		const submitUserLogout = jest.fn();
		const props = createTestProps({ submitUserLogout });
		const state = createTestState();
		const jsx = (<HeaderContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('HeaderContainer');
		element.instance().logout();
		expect(submitUserLogout).toHaveBeenCalledTimes(1);
	});
});
