// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState } from '../../../../config/tests/helpers.unit';
import AddThreadFromExtensionHandler from '../AddThreadFromExtensionHandler';
// #endregion imports

// #region mocks
jest.mock('../../../infrastructure/actions', () => ({}));
jest.mock('../../../infrastructure/selectors', () => ({
	getCharactersSortedByIdentifier: state => state.sortedCharacters
}));
jest.mock('../../shared/styled/Card', () => 'Card');
jest.mock('../../shared/modals/ModalContainer', () => 'ModalContainer');
jest.mock('../../shared/loading/LoadingIndicator', () => 'LoadingIndicator');
jest.mock('../../../infrastructure/withPageViewTracker', () => Component => Component);
jest.mock('../../../utility', () => ({
	getThreadDataFromExtensionQuery: () => ({ characterId: 3, postId: '13579' })
}));
// #endregion mocks

const createTestProps = propOverrides => ({
	fetchCharacters: jest.fn(),
	fetchUser: jest.fn(),
	openUpsertThreadModal: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	sortedCharacters: [],
	user: {},
	ui: { isUpsertThreadModalOpen: false },
	...stateOverrides
});

const createTestStateWithUser = stateOverrides => createTestState({
	user: { id: '12345' },
	...stateOverrides
});

const createTestStateWithUserAndCharacters = stateOverrides => createTestState({
	user: { id: '12345' },
	sortedCharacters: [{ characterName: 'A Character', characterId: 1 }, { characterName: 'B Character', characterId: 2 }],
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot if user is not loaded', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot if characters are not loaded', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestStateWithUser();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot if user and characters are loaded and modal open', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestStateWithUserAndCharacters({ ui: { isUpsertThreadModalOpen: true } });
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot if user and characters are loaded and modal has been closed', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestStateWithUserAndCharacters({ ui: { isUpsertThreadModalOpen: true } });
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.setProps(createTestStateWithUserAndCharacters({ isUpsertThreadModalOpen: false }));
			expect(element).toMatchSnapshot();
		});
	});
	describe('loading indicator', () => {
		it('should be displayed if user not loaded', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(getSpecWrapper(element, 'extension-handler-loader')).toHaveLength(1);
			expect(getSpecWrapper(element, 'layout-app')).toHaveLength(0);
		});
		it('should be displayed if characters not loaded', () => {
			const props = createTestProps();
			const state = createTestStateWithUser();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(getSpecWrapper(element, 'extension-handler-loader')).toHaveLength(1);
			expect(getSpecWrapper(element, 'layout-app')).toHaveLength(0);
		});
		it('should not be displayed if user and characters loaded', () => {
			const props = createTestProps();
			const state = createTestStateWithUserAndCharacters();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(getSpecWrapper(element, 'extension-handler-loader')).toHaveLength(0);
			expect(getSpecWrapper(element, 'layout-app')).toHaveLength(1);
		});
	});
	describe('success message', () => {
		it('should be hidden if user not loaded', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(getSpecWrapper(element, 'extension-handler-success-message')).toHaveLength(0);
			expect(getSpecWrapper(element, 'layout-app')).toHaveLength(0);
		});
		it('should be hidden if characters not loaded', () => {
			const props = createTestProps();
			const state = createTestStateWithUser();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(getSpecWrapper(element, 'extension-handler-success-message')).toHaveLength(0);
			expect(getSpecWrapper(element, 'layout-app')).toHaveLength(0);
		});
		it('should be hidden if user and characters loaded', () => {
			const props = createTestProps();
			const state = createTestStateWithUserAndCharacters();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(getSpecWrapper(element, 'extension-handler-success-message')).toHaveLength(0);
			expect(getSpecWrapper(element, 'layout-app')).toHaveLength(1);
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should retrieve user', () => {
			const fetchUser = jest.fn();
			const props = createTestProps({ fetchUser });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchUser).toHaveBeenCalledTimes(1);
		});
		it('should retrieve characters', () => {
			const fetchCharacters = jest.fn();
			const props = createTestProps({ fetchCharacters });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchCharacters).toHaveBeenCalledTimes(1);
		});
	});
	describe('componentWillReceiveProps', () => {
		it('should not trigger modal open if user is not loaded', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.setProps({ user: {} });
			expect(openUpsertThreadModal).toHaveBeenCalledTimes(0);
		});
		it('should not trigger modal open if characters are not loaded', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.setProps(createTestStateWithUser());
			expect(openUpsertThreadModal).toHaveBeenCalledTimes(0);
		});
		it('should trigger modal open if user and characters are loaded', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.setProps(createTestStateWithUserAndCharacters());
			expect(openUpsertThreadModal).toHaveBeenCalledTimes(1);
		});
		it('should not display success message if user is not loaded', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.setProps({ user: {} });
			const successMessage = getSpecWrapper(element, 'extension-handler-success-message');
			expect(successMessage).not.toExist();
		});
		it('should not display success message if characters are not loaded', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.setProps(createTestStateWithUser());
			const successMessage = getSpecWrapper(element, 'extension-handler-success-message');
			expect(successMessage).not.toExist();
		});
		it('should not display success message if user and characters are loaded and modal open', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.setProps(createTestStateWithUserAndCharacters({ isUpsertThreadModalOpen: true }));
			const successMessage = getSpecWrapper(element, 'extension-handler-success-message');
			expect(successMessage).not.toExist();
		});
		it('should display success message if user and characters are loaded and modal has been closed', () => {
			const openUpsertThreadModal = jest.fn();
			const props = createTestProps({ openUpsertThreadModal });
			const state = createTestState();
			const jsx = (<AddThreadFromExtensionHandler {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.setProps(createTestStateWithUserAndCharacters({ isUpsertThreadModalOpen: true }));
			element.setProps(createTestStateWithUserAndCharacters({ isUpsertThreadModalOpen: false }));
			const successMessage = getSpecWrapper(element, 'extension-handler-success-message');
			expect(successMessage).toExist();
		});
	});
});
