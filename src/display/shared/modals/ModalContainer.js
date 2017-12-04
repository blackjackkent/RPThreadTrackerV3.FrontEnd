import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { closeEditCharacterModal } from '../../../infrastructure/actions';
import EditCharacterModal from './EditCharacterModal';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	characterToEdit: PropTypes.shape({}).isRequired,
	isEditCharacterModalOpen: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	const {
		ui,
		characterToEdit
	} = state;
	return {
		isEditCharacterModalOpen: ui.isEditCharacterModalOpen,
		characterToEdit
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
			isEditCharacterModalOpen,
			characterToEdit
		} = this.props;
		return (
			<EditCharacterModal
				isEditCharacterModalOpen={isEditCharacterModalOpen}
				closeEditCharacterModal={this.closeEditCharacterModal}
				characterToEdit={characterToEdit}
			/>
		);
	}
}

ModalContainer.propTypes = propTypes;
export default connect(mapStateToProps)(ModalContainer);
