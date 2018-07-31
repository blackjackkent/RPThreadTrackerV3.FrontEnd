// #region imports
import React from 'react';
import { shallowWithState } from '../../../../../config/tests/helpers.unit';
import HeaderContainer from '../HeaderContainer';
// #endregion imports

// #region mocks
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getNewsUnreadCount: () => 1
}));
jest.mock('../Header', () => 'Header');
// #endregion mocks

const createTestProps = propOverrides => ({
	openUpsertCharacterModal: jest.fn(),
	openUpsertThreadModal: jest.fn(),
	submitUserLogout: jest.fn(),
	toggleHeaderProfileDropdown: jest.fn(),
	toggleHeaderAddMenuDropdown: jest.fn(),
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
		isHeaderProfileDropdownOpen: true,
		isHeaderAddMenuDropdownOpen: true,
		isMobileSidebarOpen: true
	},
	news: [{}, {}],
	userSettings: { settingsId: '54321' },
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should render method props', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element.props().mobileSidebarToggle).toBeTruthy();
			expect(element.props().asideToggle).toBeTruthy();
			expect(element.props().headerProfileDropdownToggle).toBeTruthy();
			expect(element.props().headerAddMenuDropdownToggle).toBeTruthy();
			expect(element.props().sidebarToggle).toBeTruthy();
			expect(element.props().openUpsertCharacterModal).toBeTruthy();
			expect(element.props().openNewThreadModal).toBeTruthy();
			expect(element.props().logout).toBeTruthy();
		});
		it('should render forwarded props', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element.props().isNewsAsideOpen).toBe(true);
			expect(element.props().isSidebarOpen).toBe(true);
			expect(element.props().isHeaderProfileDropdownOpen).toBe(true);
			expect(element.props().isHeaderAddMenuDropdownOpen).toBe(true);
			expect(element.props().isMobileSidebarOpen).toBe(true);
			expect(element.props().user).toHaveProperty('id', '12345');
			expect(element.props().news).toHaveLength(2);
			expect(element.props().newsUnreadCount).toBe(1);
			expect(element.props().userSettings).toHaveProperty('settingsId', '54321');
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount/componentWillReceiveProps', () => {
		it('should set mobile sidebar visibility class', () => {
			document.body.classList = [];
			const props = createTestProps();
			const state = createTestState({
				ui: {
					isMobileSidebarOpen: true,
					isSidebarOpen: true,
					isNewsAsideOpen: true,
					isHeaderProfileDropdownOpen: false,
					isHeaderAddMenuDropdownOpen: false
				}
			});
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(document.body.classList).toHaveLength(1);
			expect(document.body.classList).toContain('sidebar-mobile-show');

			element.setProps({ isMobileSidebarOpen: false });
			expect(document.body.classList).toHaveLength(0);
		});
		it('should set sidebar visibility class', () => {
			document.body.classList = [];
			const props = createTestProps();
			const state = createTestState({
				ui: {
					isMobileSidebarOpen: false,
					isSidebarOpen: false,
					isNewsAsideOpen: true,
					isHeaderProfileDropdownOpen: false,
					isHeaderAddMenuDropdownOpen: false
				}
			});
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(document.body.classList).toHaveLength(1);
			expect(document.body.classList).toContain('sidebar-hidden');

			element.setProps({ isSidebarOpen: true });
			expect(document.body.classList).toHaveLength(0);
		});
		it('should set aside visibility class', () => {
			document.body.classList = [];
			const props = createTestProps();
			const state = createTestState({
				ui: {
					isMobileSidebarOpen: false,
					isSidebarOpen: true,
					isNewsAsideOpen: false,
					isHeaderProfileDropdownOpen: false,
					isHeaderAddMenuDropdownOpen: false
				}
			});
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(document.body.classList).toHaveLength(1);
			expect(document.body.classList).toContain('aside-menu-hidden');

			element.setProps({ isNewsAsideOpen: true });
			expect(document.body.classList).toHaveLength(0);
		});
	});
	describe('sidebarToggle', () => {
		it('should dispatch sidebar toggle action', () => {
			const toggleSidebar = jest.fn();
			const props = createTestProps({ toggleSidebar });
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().sidebarToggle();
			expect(toggleSidebar).toHaveBeenCalledTimes(1);
			expect(toggleSidebar).toHaveBeenCalledWith(false);
		});
	});
	describe('asideToggle', () => {
		it('should dispatch aside toggle action', () => {
			const toggleNewsAside = jest.fn();
			const props = createTestProps({ toggleNewsAside });
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().asideToggle();
			expect(toggleNewsAside).toHaveBeenCalledTimes(1);
			expect(toggleNewsAside).toHaveBeenCalledWith(false);
		});
	});
	describe('mobileSidebarToggle', () => {
		it('should dispatch mobile sidebar toggle action', () => {
			const toggleMobileSidebar = jest.fn();
			const props = createTestProps({ toggleMobileSidebar });
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().mobileSidebarToggle();
			expect(toggleMobileSidebar).toHaveBeenCalledTimes(1);
			expect(toggleMobileSidebar).toHaveBeenCalledWith(false);
		});
	});
	describe('headerProfileDropdownToggle', () => {
		it('should dispatch header profile dropdown toggle action when headerProfileDropdownToggle is called', () => {
			const toggleHeaderProfileDropdown = jest.fn();
			const props = createTestProps({ toggleHeaderProfileDropdown });
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().headerProfileDropdownToggle();
			expect(toggleHeaderProfileDropdown).toHaveBeenCalledTimes(1);
			expect(toggleHeaderProfileDropdown).toHaveBeenCalledWith(false);
		});
	});
	describe('headerAddMenuDropdownToggle', () => {
		it('should dispatch header add menu dropdown toggle action when headerAddMenuDropdownToggle is called', () => {
			const toggleHeaderAddMenuDropdown = jest.fn();
			const props = createTestProps({ toggleHeaderAddMenuDropdown });
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().headerAddMenuDropdownToggle();
			expect(toggleHeaderAddMenuDropdown).toHaveBeenCalledTimes(1);
			expect(toggleHeaderAddMenuDropdown).toHaveBeenCalledWith(false);
		});
	});
	describe('openUpsertCharacterModal', () => {
		it('should dispatch upsert character modal open action', () => {
			const openUpsertCharacterModal = jest.fn();
			const props = createTestProps({ openUpsertCharacterModal });
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().openUpsertCharacterModal();
			expect(openUpsertCharacterModal).toHaveBeenCalledTimes(1);
		});
	});
	describe('openNewThreadModal', () => {
		it('should dispatch upsert thread modal open action when openNewThreadModal is called', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().openNewThreadModal();
			expect(openUpsertThreadModal).toHaveBeenCalledTimes(1);
		});
	});
	describe('logout', () => {
		it('should dispatch logout action', () => {
			const submitUserLogout = jest.fn();
			const props = createTestProps({ submitUserLogout });
			const state = createTestState();
			const jsx = (<HeaderContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().logout();
			expect(submitUserLogout).toHaveBeenCalledTimes(1);
		});
	});
});
