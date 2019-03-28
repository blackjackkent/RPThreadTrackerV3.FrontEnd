import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as selectors from '../../../infrastructure/selectors';
import * as actions from '../../../infrastructure/actions';
import columns from '../../../infrastructure/constants/columns';
import UpsertCharacterModal from './UpsertCharacterModal';
import UpsertThreadModal from './UpsertThreadModal';
import GenericConfirmationModal from './GenericConfirmationModal';
import UpsertPublicViewModal from './UpsertPublicViewModal';

const propTypes = {
	bulkThreadsToEdit: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	bulkUntrackThreads: PropTypes.func.isRequired,
	characterToEdit: PropTypes.shape({}).isRequired,
	closeBulkUntrackThreadsModal: PropTypes.func.isRequired,
	closeDeletePublicViewModal: PropTypes.func.isRequired,
	closeUntrackCharacterModal: PropTypes.func.isRequired,
	closeUntrackThreadModal: PropTypes.func.isRequired,
	closeUpsertCharacterModal: PropTypes.func.isRequired,
	closeUpsertPublicViewModal: PropTypes.func.isRequired,
	closeUpsertThreadModal: PropTypes.func.isRequired,
	deletePublicView: PropTypes.func.isRequired,
	isBulkUntrackThreadsModalOpen: PropTypes.bool.isRequired,
	isBulkUpdateTagModalOpen: PropTypes.bool.isRequired,
	isDeletePublicViewModalOpen: PropTypes.bool.isRequired,
	isUntrackCharacterModalOpen: PropTypes.bool.isRequired,
	isUntrackThreadModalOpen: PropTypes.bool.isRequired,
	isUpsertCharacterModalOpen: PropTypes.bool.isRequired,
	isUpsertPublicViewModalOpen: PropTypes.bool.isRequired,
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	sortedCharacters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	sortedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
	threadToEdit: PropTypes.shape({}).isRequired,
	untrackCharacter: PropTypes.func.isRequired,
	untrackThread: PropTypes.func.isRequired,
	upsertCharacter: PropTypes.func.isRequired,
	upsertPublicView: PropTypes.func.isRequired,
	upsertThread: PropTypes.func.isRequired,
	viewToEdit: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const {
		ui,
		characterToEdit,
		threadToEdit,
		bulkThreadsToEdit,
		viewToEdit,
		tagToEdit
	} = state;
	const sortedCharacters = selectors.getCharactersSortedByIdentifier(state);
	const sortedTags = selectors.getTagsSortedByTagText(state);
	return {
		isUpsertCharacterModalOpen: ui.isUpsertCharacterModalOpen,
		isUntrackThreadModalOpen: ui.isUntrackThreadModalOpen,
		isBulkUntrackThreadsModalOpen: ui.isBulkUntrackThreadsModalOpen,
		isUpsertThreadModalOpen: ui.isUpsertThreadModalOpen,
		isUntrackCharacterModalOpen: ui.isUntrackCharacterModalOpen,
		isUpsertPublicViewModalOpen: ui.isUpsertPublicViewModalOpen,
		isDeletePublicViewModalOpen: ui.isDeletePublicViewModalOpen,
		isBulkUpdateTagModalOpen: ui.isBulkUpdateTagModalOpen,
		characterToEdit,
		threadToEdit,
		bulkThreadsToEdit,
		viewToEdit,
		tagToEdit,
		sortedCharacters,
		sortedTags
	};
}

const ModalContainer = (props) => {
	const {
		bulkThreadsToEdit,
		bulkUntrackThreads,
		bulkUpdateTag,
		characterToEdit,
		closeBulkUntrackThreadsModal,
		closeBulkUpdateTagModal,
		closeDeletePublicViewModal,
		closeUntrackCharacterModal,
		closeUntrackThreadModal,
		closeUpsertCharacterModal,
		closeUpsertPublicViewModal,
		closeUpsertThreadModal,
		deletePublicView,
		isBulkUntrackThreadsModalOpen,
		isBulkUpdateTagModalOpen,
		isDeletePublicViewModalOpen,
		isUntrackCharacterModalOpen,
		isUntrackThreadModalOpen,
		isUpsertCharacterModalOpen,
		isUpsertPublicViewModalOpen,
		isUpsertThreadModalOpen,
		sortedCharacters,
		sortedTags,
		threadToEdit,
		untrackCharacter,
		untrackThread,
		upsertCharacter,
		upsertPublicView,
		upsertThread,
		viewToEdit,
		tagToEdit
	} = props;
	return (
		<div>
			<UpsertThreadModal
				isUpsertThreadModalOpen={isUpsertThreadModalOpen}
				closeUpsertThreadModal={closeUpsertThreadModal}
				threadToEdit={threadToEdit}
				submitUpsertThread={upsertThread}
				characters={sortedCharacters}
			/>
			<UpsertCharacterModal
				isUpsertCharacterModalOpen={isUpsertCharacterModalOpen}
				closeUpsertCharacterModal={closeUpsertCharacterModal}
				submitUpsertCharacter={upsertCharacter}
				characterToEdit={characterToEdit}
			/>
			<UpsertPublicViewModal
				isUpsertPublicViewModalOpen={isUpsertPublicViewModalOpen}
				submitUpsertPublicView={upsertPublicView}
				closeUpsertPublicViewModal={closeUpsertPublicViewModal}
				viewToEdit={viewToEdit}
				characters={sortedCharacters}
				tags={sortedTags}
				columns={columns}
			/>
			<GenericConfirmationModal
				isModalOpen={isUntrackThreadModalOpen}
				submitCallback={untrackThread}
				submitButtonText="Untrack"
				closeCallback={closeUntrackThreadModal}
				closeButtonText="Cancel"
				data={threadToEdit}
				headerText="Confirm Thread Untracking"
				bodyText={(
					<span>Are you sure you want to untrack <strong>{threadToEdit.userTitle}</strong>?</span>
				)}
			/>
			<GenericConfirmationModal
				isModalOpen={isBulkUntrackThreadsModalOpen}
				submitCallback={bulkUntrackThreads}
				submitButtonText="Untrack"
				closeCallback={closeBulkUntrackThreadsModal}
				closeButtonText="Cancel"
				data={bulkThreadsToEdit}
				headerText="Confirm Thread Untracking"
				bodyText={`Are you sure you want to untrack ${bulkThreadsToEdit.length} threads?`}
			/>
			<GenericConfirmationModal
				isModalOpen={isUntrackCharacterModalOpen}
				submitCallback={untrackCharacter}
				submitButtonText="Untrack"
				closeCallback={closeUntrackCharacterModal}
				closeButtonText="Cancel"
				data={characterToEdit}
				headerText="Confirm Character Untracking"
				bodyText={(
					<span>Are you sure you want to untrack{' '}
						<strong>
							{characterToEdit.characterName
								? characterToEdit.characterName
								: characterToEdit.urlIdentifier}
						</strong>? This will also untrack all threads associated with this character.
					</span>
				)}
			/>
			<GenericConfirmationModal
				isModalOpen={isDeletePublicViewModalOpen}
				submitCallback={deletePublicView}
				submitButtonText="Delete"
				closeCallback={closeDeletePublicViewModal}
				closeButtonText="Cancel"
				data={viewToEdit}
				headerText="Confirm Public View Deletion"
				bodyText={<span>Are you sure you want to delete <strong>{viewToEdit.name}</strong>?</span>}
			/>
			<GenericConfirmationModal
				isModalOpen={isBulkUpdateTagModalOpen}
				submitCallback={bulkUpdateTag}
				submitButtonText="Update Tag"
				closeCallback={closeBulkUpdateTagModal}
				closeButtonText="Cancel"
				data={tagToEdit}
				headerText="Confirm Updated Tag Value"
				bodyText={<span>Are you sure you want to change the tag <strong>{tagToEdit.selectedTag}</strong> to <strong>{tagToEdit.updatedValue}</strong> on all your threads?</span>}
			/>
		</div>
	);
};

ModalContainer.propTypes = propTypes;
export default connect(mapStateToProps, {
	bulkUntrackThreads: actions.bulkUntrackThreads,
	bulkUpdateTag: actions.bulkUpdateTag,
	closeBulkUntrackThreadsModal: actions.closeBulkUntrackThreadsModal,
	closeBulkUpdateTagModal: actions.closeBulkUpdateTagModal,
	closeDeletePublicViewModal: actions.closeDeletePublicViewModal,
	closeUntrackCharacterModal: actions.closeUntrackCharacterModal,
	closeUntrackThreadModal: actions.closeUntrackThreadModal,
	closeUpsertCharacterModal: actions.closeUpsertCharacterModal,
	closeUpsertPublicViewModal: actions.closeUpsertPublicViewModal,
	closeUpsertThreadModal: actions.closeUpsertThreadModal,
	deletePublicView: actions.deletePublicView,
	untrackCharacter: actions.untrackCharacter,
	untrackThread: actions.untrackThread,
	upsertCharacter: actions.upsertCharacter,
	upsertPublicView: actions.upsertPublicView,
	upsertThread: actions.upsertThread
})(ModalContainer);
