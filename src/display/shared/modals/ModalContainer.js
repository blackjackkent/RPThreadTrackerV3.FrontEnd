import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { closeEditCharacterModal, untrackThread, closeUntrackThreadModal, closeBulkUntrackThreadsModal, bulkUntrackThreads, closeUpsertThreadModal } from '../../../infrastructure/actions';
import EditCharacterModal from './EditCharacterModal';
import UpsertThreadModal from './UpsertThreadModal';
import GenericConfirmationModal from './GenericConfirmationModal';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	characterToEdit: PropTypes.shape({}).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	closeUpsertThreadModal: PropTypes.func.isRequired,
	threadToEdit: PropTypes.shape({}).isRequired,
	bulkThreadsToEdit: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isBulkUntrackThreadsModalOpen: PropTypes.bool.isRequired,
	isEditCharacterModalOpen: PropTypes.bool.isRequired,
	isUntrackThreadModalOpen: PropTypes.bool.isRequired,
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	closeUntrackThreadModal: PropTypes.func.isRequired,
	closeBulkUntrackThreadsModal: PropTypes.func.isRequired,
	untrackThread: PropTypes.func.isRequired,
	bulkUntrackThreads: PropTypes.func.isRequired
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
		isEditCharacterModalOpen: ui.isEditCharacterModalOpen,
		isUntrackThreadModalOpen: ui.isUntrackThreadModalOpen,
		isBulkUntrackThreadsModalOpen: ui.isBulkUntrackThreadsModalOpen,
		isUpsertThreadModalOpen: ui.isUpsertThreadModalOpen,
		characterToEdit,
		characters,
		threadToEdit,
		bulkThreadsToEdit
	};
}

class ModalContainer extends Component {
	constructor(props) {
		super(props);
		this.closeEditCharacterModal = this.closeEditCharacterModal.bind(this);
	}

	closeEditCharacterModal() {
		const { dispatch } = this.props;
		dispatch(closeEditCharacterModal());
	}

	render() {
		const {
			isUpsertThreadModalOpen,
			isEditCharacterModalOpen,
			isUntrackThreadModalOpen,
			isBulkUntrackThreadsModalOpen,
			characterToEdit,
			characters,
			threadToEdit,
			bulkThreadsToEdit
		} = this.props;
		return (
			<div>
				<UpsertThreadModal
					isUpsertThreadModalOpen={isUpsertThreadModalOpen}
					closeUpsertThreadModal={this.props.closeUpsertThreadModal}
					threadToEdit={threadToEdit}
					characters={characters}
				/>
				<EditCharacterModal
					isEditCharacterModalOpen={isEditCharacterModalOpen}
					closeEditCharacterModal={this.closeEditCharacterModal}
					characterToEdit={characterToEdit}
				/>
				<GenericConfirmationModal
					isModalOpen={isUntrackThreadModalOpen}
					submitCallback={this.props.untrackThread}
					submitButtonText="Untrack"
					closeCallback={this.props.closeUntrackThreadModal}
					closeButtonText="Cancel"
					data={threadToEdit}
					headerText="Confirm Thread Untracking"
					bodyText={`Are you sure you want to untrack ${threadToEdit ? threadToEdit.userTitle : ''}?`}
				/>
				<GenericConfirmationModal
					isModalOpen={isBulkUntrackThreadsModalOpen}
					submitCallback={this.props.bulkUntrackThreads}
					submitButtonText="Untrack"
					closeCallback={this.props.closeBulkUntrackThreadsModal}
					closeButtonText="Cancel"
					data={bulkThreadsToEdit}
					headerText="Confirm Thread Untracking"
					bodyText={`Are you sure you want to untrack ${bulkThreadsToEdit.length} threads?`}
				/>
			</div>
		);
	}
}

ModalContainer.propTypes = propTypes;
export default connect(mapStateToProps, {
	closeUpsertThreadModal,
	closeUntrackThreadModal,
	untrackThread,
	closeBulkUntrackThreadsModal,
	bulkUntrackThreads
})(ModalContainer);
