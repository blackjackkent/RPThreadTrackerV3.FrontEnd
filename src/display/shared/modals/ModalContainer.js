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
	bulkUpdateTag: PropTypes.func.isRequired,
	bulkDeleteTag: PropTypes.func.isRequired,
	characterToEdit: PropTypes.shape({
		characterName: PropTypes.string,
		urlIdentifier: PropTypes.string
	}).isRequired,
	closeBulkUntrackThreadsModal: PropTypes.func.isRequired,
	closeBulkUpdateTagModal: PropTypes.func.isRequired,
	closeBulkDeleteTagModal: PropTypes.func.isRequired,
	closeDeletePublicViewModal: PropTypes.func.isRequired,
	closeUntrackCharacterModal: PropTypes.func.isRequired,
	closeUntrackThreadModal: PropTypes.func.isRequired,
	closeUpsertCharacterModal: PropTypes.func.isRequired,
	closeUpsertPublicViewModal: PropTypes.func.isRequired,
	closeUpsertThreadModal: PropTypes.func.isRequired,
	closeDeleteAccountConfirmationModal: PropTypes.func.isRequired,
	deletePublicView: PropTypes.func.isRequired,
	isBulkUntrackThreadsModalOpen: PropTypes.bool.isRequired,
	isBulkUpdateTagModalOpen: PropTypes.bool.isRequired,
	isBulkDeleteTagModalOpen: PropTypes.bool.isRequired,
	isDeletePublicViewModalOpen: PropTypes.bool.isRequired,
	isUntrackCharacterModalOpen: PropTypes.bool.isRequired,
	isUntrackThreadModalOpen: PropTypes.bool.isRequired,
	isUpsertCharacterModalOpen: PropTypes.bool.isRequired,
	isUpsertPublicViewModalOpen: PropTypes.bool.isRequired,
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	isDeleteAccountConfirmationModalOpen: PropTypes.bool.isRequired,
	sortedCharacters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	sortedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
	threadToEdit: PropTypes.shape({
		userTitle: PropTypes.string
	}).isRequired,
	untrackCharacter: PropTypes.func.isRequired,
	untrackThread: PropTypes.func.isRequired,
	upsertCharacter: PropTypes.func.isRequired,
	upsertPublicView: PropTypes.func.isRequired,
	upsertThread: PropTypes.func.isRequired,
	submitUserAccountDeletion: PropTypes.func.isRequired,
	tagToEdit: PropTypes.shape({
		selectedTag: PropTypes.string,
		updatedValue: PropTypes.string
	}).isRequired,
	viewToEdit: PropTypes.shape({
		name: PropTypes.string
	}).isRequired
};

function mapStateToProps(state) {
	const { ui, characterToEdit, threadToEdit, bulkThreadsToEdit, viewToEdit, tagToEdit } = state;
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
		isBulkDeleteTagModalOpen: ui.isBulkDeleteTagModalOpen,
		isDeleteAccountConfirmationModalOpen: ui.isDeleteAccountConfirmationModalOpen,
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
		bulkDeleteTag,
		characterToEdit,
		closeBulkUntrackThreadsModal,
		closeBulkUpdateTagModal,
		closeBulkDeleteTagModal,
		closeDeletePublicViewModal,
		closeUntrackCharacterModal,
		closeUntrackThreadModal,
		closeUpsertCharacterModal,
		closeUpsertPublicViewModal,
		closeUpsertThreadModal,
		closeDeleteAccountConfirmationModal,
		deletePublicView,
		isBulkUntrackThreadsModalOpen,
		isBulkUpdateTagModalOpen,
		isBulkDeleteTagModalOpen,
		isDeletePublicViewModalOpen,
		isUntrackCharacterModalOpen,
		isUntrackThreadModalOpen,
		isUpsertCharacterModalOpen,
		isUpsertPublicViewModalOpen,
		isUpsertThreadModalOpen,
		isDeleteAccountConfirmationModalOpen,
		sortedCharacters,
		sortedTags,
		threadToEdit,
		untrackCharacter,
		untrackThread,
		upsertCharacter,
		upsertPublicView,
		upsertThread,
		viewToEdit,
		tagToEdit,
		submitUserAccountDeletion
	} = props;
	return (
		<div>
			<UpsertThreadModal
				isModalOpen={isUpsertThreadModalOpen}
				onModalClose={closeUpsertThreadModal}
				thread={threadToEdit}
				onInputChange={null}
				onFormSubmit={upsertThread}
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
				bodyText={
					<span>
						Are you sure you want to untrack <strong>{threadToEdit.userTitle}</strong>?
					</span>
				}
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
				bodyText={
					<span>
						Are you sure you want to untrack{' '}
						<strong>
							{characterToEdit.characterName
								? characterToEdit.characterName
								: characterToEdit.urlIdentifier}
						</strong>
						? This will also untrack all threads associated with this character.
					</span>
				}
			/>
			<GenericConfirmationModal
				isModalOpen={isDeletePublicViewModalOpen}
				submitCallback={deletePublicView}
				submitButtonText="Delete"
				closeCallback={closeDeletePublicViewModal}
				closeButtonText="Cancel"
				data={viewToEdit}
				headerText="Confirm Public View Deletion"
				bodyText={
					<span>
						Are you sure you want to delete <strong>{viewToEdit.name}</strong>?
					</span>
				}
			/>
			<GenericConfirmationModal
				isModalOpen={isBulkUpdateTagModalOpen}
				submitCallback={bulkUpdateTag}
				submitButtonText="Update Tag"
				closeCallback={closeBulkUpdateTagModal}
				closeButtonText="Cancel"
				data={tagToEdit}
				headerText="Confirm Updated Tag Value"
				bodyText={
					<span>
						Are you sure you want to change the tag{' '}
						<strong>{tagToEdit.selectedTag}</strong> to{' '}
						<strong>{tagToEdit.updatedValue}</strong> on all your threads?
					</span>
				}
			/>
			<GenericConfirmationModal
				isModalOpen={isBulkDeleteTagModalOpen}
				submitCallback={bulkDeleteTag}
				submitButtonText="Delete Tag"
				closeCallback={closeBulkDeleteTagModal}
				closeButtonText="Cancel"
				data={tagToEdit}
				headerText="Confirm Deleted Tag Value"
				bodyText={
					<span>
						Are you sure you want to remove the tag{' '}
						<strong>{tagToEdit.selectedTag}</strong> from all your threads?
					</span>
				}
			/>
			<GenericConfirmationModal
				isModalOpen={isDeleteAccountConfirmationModalOpen}
				submitCallback={submitUserAccountDeletion}
				submitButtonText="Confirm Deletion"
				closeCallback={closeDeleteAccountConfirmationModal}
				closeButtonText="Cancel"
				data={null}
				headerText="Really Delete Account?"
				bodyText={
					<span>
						Are you sure you want to delete your account?{' '}
						<strong>This action cannot be undone.</strong> You will be unable to access
						any tracked characters or threads in the future, unless you create a new
						account and re-add them.
					</span>
				}
			/>
		</div>
	);
};

ModalContainer.propTypes = propTypes;
export default connect(mapStateToProps, {
	bulkUntrackThreads: actions.bulkUntrackThreads,
	bulkUpdateTag: actions.bulkUpdateTag,
	bulkDeleteTag: actions.bulkDeleteTag,
	closeBulkUntrackThreadsModal: actions.closeBulkUntrackThreadsModal,
	closeBulkUpdateTagModal: actions.closeBulkUpdateTagModal,
	closeBulkDeleteTagModal: actions.closeBulkDeleteTagModal,
	closeDeletePublicViewModal: actions.closeDeletePublicViewModal,
	closeUntrackCharacterModal: actions.closeUntrackCharacterModal,
	closeUntrackThreadModal: actions.closeUntrackThreadModal,
	closeUpsertCharacterModal: actions.closeUpsertCharacterModal,
	closeUpsertPublicViewModal: actions.closeUpsertPublicViewModal,
	closeUpsertThreadModal: actions.closeUpsertThreadModal,
	closeDeleteAccountConfirmationModal: actions.closeDeleteAccountConfirmationModal,
	deletePublicView: actions.deletePublicView,
	submitUserAccountDeletion: actions.submitUserAccountDeletion,
	untrackCharacter: actions.untrackCharacter,
	untrackThread: actions.untrackThread,
	upsertCharacter: actions.upsertCharacter,
	upsertPublicView: actions.upsertPublicView,
	upsertThread: actions.upsertThread
})(ModalContainer);
