// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import TooltipForm from '~/display/forms/TooltipForm';
import Modal from '~/display/shared/styled/Modal';
import { sortCharacters } from '~/utility';
import UpsertPublicViewForm from '~/display/forms/upsert-public-view/UpsertPublicViewForm';
import useUpdatePublicViewMutation from '~/infrastructure/hooks/mutations/public-views/useUpdatePublicViewMutation';
import useCreatePublicViewMutation from '~/infrastructure/hooks/mutations/public-views/useCreatePublicViewMutation';
import useValidatedForm from '~/display/forms/validated-form/useValidatedForm';
import validator from '~/display/forms/upsert-public-view/_validator';
import LoadingIndicator from '../loading/LoadingIndicator';
// #endregion imports

const propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})),
	tags: PropTypes.arrayOf(PropTypes.string),
	columns: PropTypes.shape({}).isRequired,
	actedView: PropTypes.shape({
		id: PropTypes.string
	})
};

const UpsertPublicViewModal = (props) => {
	const { createPublicView, isLoading: isCreatePublicViewLoading } =
		useCreatePublicViewMutation();
	const { updatePublicView, isLoading: isUpdatePublicViewLoading } =
		useUpdatePublicViewMutation();
	const isLoading = isCreatePublicViewLoading || isUpdatePublicViewLoading;
	const { actedView, characters, tags, columns, isModalOpen, setIsModalOpen } = props;
	const activeCharacters = [].concat(
		characters?.sort(sortCharacters).filter((c) => !c.isOnHiatus)
	);

	const submitForm = (formData) => {
		const upsertFn = formData.id ? updatePublicView : createPublicView;
		upsertFn(formData)
			.then(() => {
				setIsModalOpen(false);
				toast.success(formData.id ? 'View updated!' : 'View created!');
			})
			.catch(() => {
				toast.error(
					`There was an error ${formData.id ? 'updating' : 'creating'} this view.`
				);
			});
	};

	const { onFormSubmit, inputProps, isProcessingValidation } = useValidatedForm(
		submitForm,
		validator,
		actedView
	);

	return (
		<Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} backdrop>
			<form onSubmit={onFormSubmit}>
				<ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
					{actedView?.id ? 'Edit Public View' : 'Add New Public View'}
				</ModalHeader>
				<ModalBody>
					<TooltipForm
						Renderable={UpsertPublicViewForm}
						inputProps={inputProps}
						characters={activeCharacters}
						tags={tags}
						columns={columns}
						actedView={actedView}
					/>
				</ModalBody>
				<ModalFooter>
					{(isLoading || isProcessingValidation) && <LoadingIndicator />}
					<Button color="primary">
						{actedView?.id ? 'Edit Public View' : 'Add Public View'}
					</Button>{' '}
					<Button color="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>
						Cancel
					</Button>
				</ModalFooter>
			</form>
		</Modal>
	);
};

UpsertPublicViewModal.propTypes = propTypes;
export default UpsertPublicViewModal;
