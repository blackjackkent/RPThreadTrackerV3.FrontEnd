// #region imports
import React from 'react';
import { shallowWithState, getSpecWrapper } from '~/testhelpers/helpers.unit';
import ManageCharacters from '../ManageCharacters';
// #endregion imports

// #region mocks
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getIsLoadingIconVisible: () => true,
	getThreadCountsByCharacter: () => ({ 5: 10, 15: 20 })
}));
jest.mock('../components/CurrentCharacterTable', () => 'CurrentCharacterTable');
// #endregion mocks

const createTestProps = propOverrides => ({
	fetchActiveThreads: jest.fn(),
	fetchCharacters: jest.fn(),
	openUpsertCharacterModal: jest.fn(),
	upsertCharacter: jest.fn(),
	openUntrackCharacterModal: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	characters: [
		{ characterId: 1, characterName: 'Character 1' },
		{ characterId: 2, characterName: 'Character 2' }
	],
	activeThreads: [{ threadId: 1, userTitle: 'Active 1' }, { threadId: 2, userTitle: 'Active 2' }, { threadId: 3, userTitle: 'Active 3' }],
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<ManageCharacters {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should pass props to character table', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<ManageCharacters {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const table = getSpecWrapper(element, 'manage-characters-current-character-table');
			expect(table.props().characters).toHaveLength(2);
			expect(table.props().openUpsertCharacterModal).toBeDefined();
			expect(table.props().toggleCharacterIsOnHiatus).toBeDefined();
			expect(table.props().openUntrackCharacterModal).toBeDefined();
			expect(table.props().isLoadingIconVisible).toBe(true);
			expect(table.props().threadCounts).toEqual({ 5: 10, 15: 20 });
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should fetch characters when characters are not loaded', () => {
			const fetchCharacters = jest.fn();
			const props = createTestProps({ fetchCharacters });
			const state = createTestState({ characters: [] });
			const jsx = (<ManageCharacters {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchCharacters).toHaveBeenCalledTimes(1);
		});
		it('should not fetch characters when characters are loaded', () => {
			const fetchCharacters = jest.fn();
			const props = createTestProps({ fetchCharacters });
			const state = createTestState();
			const jsx = (<ManageCharacters {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchCharacters).toHaveBeenCalledTimes(0);
		});
		it('should fetch active threads when active threads are not loaded', () => {
			const fetchActiveThreads = jest.fn();
			const props = createTestProps({ fetchActiveThreads });
			const state = createTestState({ activeThreads: [] });
			const jsx = (<ManageCharacters {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchActiveThreads).toHaveBeenCalledTimes(1);
		});
		it('should not fetch active threads when active threads are loaded', () => {
			const fetchActiveThreads = jest.fn();
			const props = createTestProps({ fetchActiveThreads });
			const state = createTestState();
			const jsx = (<ManageCharacters {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchActiveThreads).toHaveBeenCalledTimes(0);
		});
	});
	describe('openUpsertCharacterModal', () => {
		it('should be triggered when child component prop is triggered', () => {
			const openUpsertCharacterModal = jest.fn();
			const props = createTestProps({ openUpsertCharacterModal });
			const state = createTestState();
			const jsx = (<ManageCharacters {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const child = getSpecWrapper(element, 'manage-characters-current-character-table');
			child.props().openUpsertCharacterModal();
			expect(openUpsertCharacterModal).toHaveBeenCalledTimes(1);
		});
	});
	describe('openUntrackCharacterModal', () => {
		it('should be triggered when child component prop is triggered', () => {
			const openUntrackCharacterModal = jest.fn();
			const props = createTestProps({ openUntrackCharacterModal });
			const state = createTestState();
			const jsx = (<ManageCharacters {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const child = getSpecWrapper(element, 'manage-characters-current-character-table');
			child.props().openUntrackCharacterModal();
			expect(openUntrackCharacterModal).toHaveBeenCalledTimes(1);
		});
	});
	describe('toggleCharacterIsOnHiatus', () => {
		it('should be triggered when child component prop is triggered', () => {
			const upsertCharacter = jest.fn();
			const props = createTestProps({ upsertCharacter });
			const state = createTestState();
			const jsx = (<ManageCharacters {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const child = getSpecWrapper(element, 'manage-characters-current-character-table');
			child.props().toggleCharacterIsOnHiatus({ characterId: 3, isOnHiatus: false });
			expect(upsertCharacter).toHaveBeenCalledTimes(1);
		});
		it('should dispatch update character action with isOnHiatus inverted', () => {
			const upsertCharacter = jest.fn();
			const props = createTestProps({ upsertCharacter });
			const state = createTestState();
			const jsx = (<ManageCharacters {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().toggleCharacterIsOnHiatus({ characterId: 3, isOnHiatus: false });
			expect(upsertCharacter).toHaveBeenCalledWith({ characterId: 3, isOnHiatus: true });
		});
	});
});
