import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { closeUpsertCharacterModal, untrackThread, closeUntrackThreadModal, closeBulkUntrackThreadsModal, bulkUntrackThreads, closeUpsertThreadModal, closeUntrackCharacterModal, untrackCharacter, upsertThread, upsertCharacter } from '../../../infrastructure/actions';
import UpsertCharacterModal from '../../forms/upsertCharacter/UpsertCharacterModal';
import UpsertThreadModal from '../../forms/upsertThread/UpsertThreadModal';
import GenericConfirmationModal from './GenericConfirmationModal';

const propTypes = {
	bulkThreadsToEdit: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	bulkUntrackThreads: PropTypes.func.isRequired,
	characterToEdit: PropTypes.shape({}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	closeBulkUntrackThreadsModal: PropTypes.func.isRequired,
	closeUntrackThreadModal: PropTypes.func.isRequired,
	closeUpsertThreadModal: PropTypes.func.isRequired,
	closeUpsertCharacterModal: PropTypes.func.isRequired,
	isBulkUntrackThreadsModalOpen: PropTypes.bool.isRequired,
	isUpsertCharacterModalOpen: PropTypes.bool.isRequired,
	isUntrackThreadModalOpen: PropTypes.bool.isRequired,
	isUntrackCharacterModalOpen: PropTypes.bool.isRequired,
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	threadToEdit: PropTypes.shape({}).isRequired,
	untrackThread: PropTypes.func.isRequired,
	upsertThread: PropTypes.func.isRequired,
	upsertCharacter: PropTypes.func.isRequired,
	untrackCharacter: PropTypes.func.isRequired,
	closeUntrackCharacterModal: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui,
		characters,
		characterToEdit,
		threadToEdit,
		bulkThreadsToEdit
	} = state;
	return {
		isUpsertCharacterModalOpen: ui.isUpsertCharacterModalOpen,
		isUntrackThreadModalOpen: ui.isUntrackThreadModalOpen,
		isBulkUntrackThreadsModalOpen: ui.isBulkUntrackThreadsModalOpen,
		isUpsertThreadModalOpen: ui.isUpsertThreadModalOpen,
		isUntrackCharacterModalOpen: ui.isUntrackCharacterModalOpen,
		characterToEdit,
		characters,
		threadToEdit,
		bulkThreadsToEdit
	};
}

const ModalContainer = (props) => {
	const {
		isUpsertThreadModalOpen,
		isUpsertCharacterModalOpen,
		isUntrackThreadModalOpen,
		isBulkUntrackThreadsModalOpen,
		isUntrackCharacterModalOpen,
		characterToEdit,
		characters,
		threadToEdit,
		bulkThreadsToEdit
	} = props;
	return (
		<div>
			<UpsertThreadModal
				isUpsertThreadModalOpen={isUpsertThreadModalOpen}
				closeUpsertThreadModal={props.closeUpsertThreadModal}
				threadToEdit={threadToEdit}
				submitUpsertThread={props.upsertThread}
				characters={characters}
			/>
			<UpsertCharacterModal
				isUpsertCharacterModalOpen={isUpsertCharacterModalOpen}
				closeUpsertCharacterModal={props.closeUpsertCharacterModal}
				submitUpsertCharacter={props.upsertCharacter}
				characterToEdit={characterToEdit}
			/>
			<GenericConfirmationModal
				isModalOpen={isUntrackThreadModalOpen}
				submitCallback={props.untrackThread}
				submitButtonText="Untrack"
				closeCallback={props.closeUntrackThreadModal}
				closeButtonText="Cancel"
				data={threadToEdit}
				headerText="Confirm Thread Untracking"
				bodyText={`Are you sure you want to untrack ${threadToEdit ? threadToEdit.userTitle : ''}?`}
			/>
			<GenericConfirmationModal
				isModalOpen={isBulkUntrackThreadsModalOpen}
				submitCallback={props.bulkUntrackThreads}
				submitButtonText="Untrack"
				closeCallback={props.closeBulkUntrackThreadsModal}
				closeButtonText="Cancel"
				data={bulkThreadsToEdit}
				headerText="Confirm Thread Untracking"
				bodyText={`Are you sure you want to untrack ${bulkThreadsToEdit.length} threads?`}
			/>
			<GenericConfirmationModal
				isModalOpen={isUntrackCharacterModalOpen}
				submitCallback={props.untrackCharacter}
				submitButtonText="Untrack"
				closeCallback={props.closeUntrackCharacterModal}
				closeButtonText="Cancel"
				data={characterToEdit}
				headerText="Confirm Character Untracking"
				bodyText={`Are you sure you want to untrack ${characterToEdit.characterName ? characterToEdit.characterName : characterToEdit.urlIdentifier}? This will also untrack all threads associated with this character.`}
			/>
		</div>
	);
};

ModalContainer.propTypes = propTypes;
export default connect(mapStateToProps, {
	closeUpsertThreadModal,
	closeUntrackThreadModal,
	closeUpsertCharacterModal,
	untrackThread,
	closeBulkUntrackThreadsModal,
	bulkUntrackThreads,
	upsertThread,
	upsertCharacter,
	untrackCharacter,
	closeUntrackCharacterModal
})(ModalContainer);
