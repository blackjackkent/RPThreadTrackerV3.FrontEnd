import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { useFormReducer } from '~/infrastructure/hooks';
import UpsertCharacterForm from '../../forms/upsert-character/UpsertCharacterForm';
import TooltipForm from '../../forms/TooltipForm';
import Modal from '../styled/Modal';
import LoadingIndicator from '../loading/LoadingIndicator';

const propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	characterToEdit: PropTypes.shape({
		characterId: PropTypes.string
	})
};
const defaultProps = {
	characterToEdit: {}
};

const UpsertCharacterModal = (props) => {
	const [character, onInputChange, setFormData] = useFormReducer();
	const { isLoading, characterToEdit, isModalOpen, setIsModalOpen, submitForm } = props;
	useEffect(() => {
		if (!characterToEdit) {
			return;
		}
		setFormData(characterToEdit);
		onInputChange({ target: { name: 'platformId', value: 1 } });
	}, [characterToEdit, onInputChange, setFormData]);
	return (
		<Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} backdrop>
			<AvForm onValidSubmit={() => submitForm(character)}>
				<ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
					{character.characterId ? 'Edit Character' : 'Add Character'}
				</ModalHeader>
				<ModalBody>
					<TooltipForm
						Renderable={UpsertCharacterForm}
						character={character}
						onInputChange={onInputChange}
					/>
				</ModalBody>
				<ModalFooter>
					{isLoading && <LoadingIndicator />}
					<Button color="primary">Submit Character</Button>{' '}
					<Button color="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>
						Cancel
					</Button>
				</ModalFooter>
			</AvForm>
		</Modal>
	);
};

UpsertCharacterModal.propTypes = propTypes;
UpsertCharacterModal.defaultProps = defaultProps;
export default UpsertCharacterModal;
