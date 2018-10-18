import React from 'react';
import PropTypes from 'prop-types';
import {
	ModalHeader, ModalBody, ModalFooter, Button
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import UpsertCharacterForm from '../../forms/upsert-character/UpsertCharacterForm';
import TooltipForm from '../../forms/TooltipForm';
import Modal from '../styled/Modal';

const propTypes = {
	isUpsertCharacterModalOpen: PropTypes.bool.isRequired,
	submitUpsertCharacter: PropTypes.func.isRequired,
	closeUpsertCharacterModal: PropTypes.func.isRequired,
	characterToEdit: PropTypes.shape({}).isRequired
};

class UpsertCharacterModal extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			characterToEdit: props.characterToEdit
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ characterToEdit: nextProps.characterToEdit });
	}

	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;
		this.setState(prevState => ({
			characterToEdit: Object.assign({}, prevState.characterToEdit, {
				[name]: value
			})
		}));
	}

	render() {
		const {
			isUpsertCharacterModalOpen,
			submitUpsertCharacter,
			closeUpsertCharacterModal,
			characterToEdit
		} = this.props;
		const { characterToEdit: requestData } = this.state;
		return (
			<Modal
				data-spec="upsert-character-modal"
				isOpen={isUpsertCharacterModalOpen}
				toggle={closeUpsertCharacterModal}
				backdrop
			>
				<AvForm
					data-spec="upsert-character-modal-form"
					onValidSubmit={() => submitUpsertCharacter(requestData)}
				>
					<ModalHeader data-spec="upsert-character-modal-header" toggle={closeUpsertCharacterModal}>{characterToEdit.characterId ? 'Edit Character' : 'Add Character'}</ModalHeader>
					<ModalBody>
						<TooltipForm
							Renderable={UpsertCharacterForm}
							characterToEdit={characterToEdit}
							handleInputChange={this.handleInputChange}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="primary">Submit Character</Button>{' '}
						<Button
							data-spec="upsert-character-modal-close-button"
							color="secondary"
							onClick={closeUpsertCharacterModal}
						>
							Cancel
						</Button>
					</ModalFooter>
				</AvForm>
			</Modal>
		);
	}
}

UpsertCharacterModal.propTypes = propTypes;
export default UpsertCharacterModal;
