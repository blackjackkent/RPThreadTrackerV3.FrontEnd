import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { closeUpsertCharacterModal, untrackThread, closeUntrackThreadModal, closeBulkUntrackThreadsModal, bulkUntrackThreads, closeUpsertThreadModal, upsertThread } from '../../../infrastructure/actions';
import UpsertCharacterModal from './UpsertCharacterModal';
import UpsertThreadModal from './UpsertThreadModal';
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
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	threadToEdit: PropTypes.shape({}),
	untrackThread: PropTypes.func.isRequired,
	upsertThread: PropTypes.func.isRequired
};

const defaultProps = {
	threadToEdit: null
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
		</div>
	);
};

ModalContainer.propTypes = propTypes;
ModalContainer.defaultProps = defaultProps;
export default connect(mapStateToProps, {
	closeUpsertThreadModal,
	closeUntrackThreadModal,
	closeUpsertCharacterModal,
	untrackThread,
	closeBulkUntrackThreadsModal,
	bulkUntrackThreads,
	upsertThread
})(ModalContainer);
