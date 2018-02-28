import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { closeEditCharacterModal, untrackThread, closeUntrackThreadModal, closeBulkUntrackThreadsModal, bulkUntrackThreads, closeUpsertThreadModal, upsertThread } from '../../../infrastructure/actions';
import EditCharacterModal from './EditCharacterModal';
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
	dispatch: PropTypes.func.isRequired,
	isBulkUntrackThreadsModalOpen: PropTypes.bool.isRequired,
	isEditCharacterModalOpen: PropTypes.bool.isRequired,
	isUntrackThreadModalOpen: PropTypes.bool.isRequired,
	isUpsertThreadModalOpen: PropTypes.bool.isRequired,
	threadToEdit: PropTypes.shape({}).isRequired,
	untrackThread: PropTypes.func.isRequired,
	upsertThread: PropTypes.func.isRequired
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
					submitUpsertThread={this.props.upsertThread}
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
	bulkUntrackThreads,
	upsertThread
})(ModalContainer);
