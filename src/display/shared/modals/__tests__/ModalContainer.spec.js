// #region imports
import React from 'react';
import { shallowWithState } from '~/utility/helpers.unit';
import ModalContainer from '../ModalContainer';
// #endregion imports

// #region mocks
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getCharactersSortedByIdentifier: () => [{ characterId: 1 }, { characterId: 2 }],
	getTagsSortedByTagText: () => ['tag1', 'tag2', 'tag3']
}));
jest.mock('../../../../infrastructure/constants/columns', () => ({
	TEST_COLUMN: {
		key: 'testKey',
		name: 'Test Value'
	}
}));
jest.mock('../UpsertCharacterModal', () => 'UpsertCharacterModal');
jest.mock('../UpsertThreadModal', () => 'UpsertThreadModal');
jest.mock('../GenericConfirmationModal', () => 'GenericConfirmationModal');
jest.mock('../UpsertPublicViewModal', () => 'UpsertPublicViewModal');
// #endregion mocks

const createTestProps = propOverrides => ({
	bulkUntrackThreads: jest.fn(),
	bulkUpdateTag: jest.fn(),
	bulkDeleteTag: jest.fn(),
	closeBulkUntrackThreadsModal: jest.fn(),
	closeBulkUpdateTagModal: jest.fn(),
	closeBulkDeleteTagModal: jest.fn(),
	closeDeletePublicViewModal: jest.fn(),
	closeUntrackCharacterModal: jest.fn(),
	closeUntrackThreadModal: jest.fn(),
	closeUpsertCharacterModal: jest.fn(),
	closeUpsertPublicViewModal: jest.fn(),
	closeUpsertThreadModal: jest.fn(),
	deletePublicView: jest.fn(),
	isBulkUntrackThreadsModalOpen: true,
	isDeletePublicViewModalOpen: true,
	isUntrackCharacterModalOpen: true,
	isUntrackThreadModalOpen: true,
	isUpsertCharacterModalOpen: true,
	isUpsertPublicViewModalOpen: true,
	isUpsertThreadModalOpen: true,
	untrackCharacter: jest.fn(),
	untrackThread: jest.fn(),
	upsertCharacter: jest.fn(),
	upsertPublicView: jest.fn(),
	upsertThread: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	ui: {
		isUpsertCharacterModalOpen: true,
		isUntrackThreadModalOpen: true,
		isBulkUntrackThreadsModalOpen: true,
		isUpsertThreadModalOpen: true,
		isUntrackCharacterModalOpen: true,
		isUpsertPublicViewModalOpen: true,
		isDeletePublicViewModalOpen: true,
		isBulkUpdateTagModalOpen: true,
		isBulkDeleteTagModalOpen: true
	},
	characterToEdit: { characterId: 3, characterName: 'My Test Character' },
	threadToEdit: { threadId: 5, userTitle: 'My Test Thread' },
	bulkThreadsToEdit: [{ threadId: 1 }, { threadId: 2 }],
	tagToEdit: { selectedTag: 'Test Tag', updatedValue: 'Test Tag Edited' },
	viewToEdit: { id: 10, name: 'My Test View' },
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<ModalContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with missing character name', () => {
			const props = createTestProps();
			const state = createTestState({ characterToEdit: { id: 12, urlIdentifier: 'my-test-character' } });
			const jsx = (<ModalContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});
