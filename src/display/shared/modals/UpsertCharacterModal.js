import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import useValidatedForm from '~/display/forms/validated-form/useValidatedForm';
import UpsertCharacterForm from '../../forms/upsert-character/UpsertCharacterForm';
import validator from '../../forms/upsert-character/_validator';
import TooltipForm from '../../forms/TooltipForm';
import Modal from '../styled/Modal';
import LoadingIndicator from '../loading/LoadingIndicator';

const propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	characterToEdit: PropTypes.shape({
		characterId: PropTypes.number
	})
};

const UpsertCharacterModal = ({
	isLoading,
	characterToEdit,
	isModalOpen,
	setIsModalOpen,
	submitForm
}) => {
	const { onFormSubmit, inputProps, setValue } = useValidatedForm(
		submitForm,
		validator,
		characterToEdit
	);
	useEffect(() => {
		setValue('platformId', 1, { shouldDirty: false });
	}, [setValue]);
	return (
		<Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} backdrop>
			<form onSubmit={onFormSubmit}>
				<ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
					{characterToEdit?.characterId ? 'Edit Character' : 'Add Character'}
				</ModalHeader>
				<ModalBody>
					<TooltipForm Renderable={UpsertCharacterForm} inputProps={inputProps} />
				</ModalBody>
				<ModalFooter>
					{isLoading && <LoadingIndicator />}
					<Button color="primary">Submit Character</Button>{' '}
					<Button color="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>
						Cancel
					</Button>
				</ModalFooter>
			</form>
		</Modal>
	);
};

UpsertCharacterModal.propTypes = propTypes;
export default UpsertCharacterModal;
