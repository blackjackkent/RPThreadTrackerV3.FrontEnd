// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState } from '../../../utility/testHelpers';
import Layout from '../Layout';
// #endregion imports

// #region mocks
jest.mock('../../../infrastructure/actions', () => ({}));
jest.mock('../../shared/header/HeaderContainer', () => 'HeaderContainer');
jest.mock('../../shared/sidebar/Sidebar', () => 'Sidebar');
jest.mock('../../shared/breadcrumb/Breadcrumb', () => 'Breadcrumb');
jest.mock('../../shared/aside/AsideContainer', () => 'AsideContainer');
jest.mock('../../shared/footer/Footer', () => 'Footer');
jest.mock('../../shared/modals/ModalContainer', () => 'ModalContainer');
jest.mock('../../shared/LoadingIndicator', () => 'LoadingIndicator');
jest.mock('../../views/dashboard/Dashboard', () => () => 'Dashboard');
jest.mock('../../views/threads/Threads', () => () => 'Threads');
jest.mock('../../views/threads/MyTurnThreads', () => 'MyTurnThreads');
jest.mock('../../views/threads/TheirTurnThreads', () => 'TheirTurnThreads');
jest.mock('../../views/threads/ArchivedThreads', () => 'ArchivedThreads');
jest.mock('../../views/threads/QueuedThreads', () => 'QueuedThreads');
jest.mock('../../views/characters/ManageCharacters', () => () => 'ManageCharacters');
jest.mock('../../views/tools/Tools', () => () => 'Tools');
jest.mock('../../views/settings/Settings', () => () => 'Settings');
jest.mock('../../views/help/Help', () => () => 'Help');
// #endregion mocks

const createTestProps = propOverrides => ({
	fetchUser: jest.fn(),
	fetchNews: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	user: { id: '' },
	news: [],
	...stateOverrides
});

describe('rendering', () => {
	it('should render valid snapshot when loading', () => {
		const props = createTestProps();
		const state = createTestState();
		const jsx = (<Layout {...props} />);
		const element = shallowWithState(jsx, state).dive('Layout');
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with loading indicator', () => {
		const props = createTestProps();
		const state = createTestState({ user: { id: '12345' } });
		const jsx = (<Layout {...props} />);
		const element = shallowWithState(jsx, state).dive('Layout');
		expect(element).toMatchSnapshot();
	});
	it('should render loading indicator if user not loaded', () => {
		const props = createTestProps();
		const state = createTestState();
		const jsx = (<Layout {...props} />);
		const element = shallowWithState(jsx, state).dive('Layout');
		expect(getSpecWrapper(element, 'layout-loader')).toHaveLength(1);
		expect(getSpecWrapper(element, 'layout-app')).toHaveLength(0);
	});
	it('should render app if user is loaded', () => {
		const props = createTestProps();
		const state = createTestState({ user: { id: '12345' } });
		const jsx = (<Layout {...props} />);
		const element = shallowWithState(jsx, state).dive('Layout');
		expect(getSpecWrapper(element, 'layout-loader')).toHaveLength(0);
		expect(getSpecWrapper(element, 'layout-app')).toHaveLength(1);
	});
});

describe('behavior', () => {
	it('should retrieve user when user is not loaded', () => {
		const fetchUser = jest.fn();
		const props = createTestProps({ fetchUser });
		const state = createTestState();
		const jsx = (<Layout {...props} />);
		shallowWithState(jsx, state).dive('Layout');
		expect(fetchUser).toHaveBeenCalledTimes(1);
	});
	it('should not retrieve user when user is loaded', () => {
		const fetchUser = jest.fn();
		const props = createTestProps({ fetchUser });
		const state = createTestState({ user: { id: '12345' } });
		const jsx = (<Layout {...props} />);
		shallowWithState(jsx, state).dive('Layout');
		expect(fetchUser).toHaveBeenCalledTimes(0);
	});
	it('should retrieve news when news is not loaded', () => {
		const fetchNews = jest.fn();
		const props = createTestProps({ fetchNews });
		const state = createTestState();
		const jsx = (<Layout {...props} />);
		shallowWithState(jsx, state).dive('Layout');
		expect(fetchNews).toHaveBeenCalledTimes(1);
	});
	it('should not retrieve news when news is loaded', () => {
		const fetchNews = jest.fn();
		const props = createTestProps({ fetchNews });
		const state = createTestState({ news: [{}, {}] });
		const jsx = (<Layout {...props} />);
		shallowWithState(jsx, state).dive('Layout');
		expect(fetchNews).toHaveBeenCalledTimes(0);
	});
});
