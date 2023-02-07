// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import TooltipForm from '~/display/forms/TooltipForm';
import UpsertThreadForm from '~/display/forms/upsert-thread/UpsertThreadForm';
import Modal from '~/display/shared/styled/Modal';
import { sortCharacters } from '~/utility';
import { useCreateThreadMutation, useUpdateThreadMutation } from '~/infrastructure/hooks/mutations';
import useValidatedForm from '~/display/forms/validated-form/useValidatedForm';
import LoadingIndicator from '../loading/LoadingIndicator';
import validator from '../../forms/upsert-thread/_validator';
// #endregion imports

const propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})),
	actedThread: PropTypes.shape({
		threadId: PropTypes.number,
		threadTags: PropTypes.arrayOf(PropTypes.shape({}))
	})
};

const UpsertThreadModal = ({ actedThread, characters, isModalOpen, setIsModalOpen }) => {
	const { createThread, isLoading: isCreateThreadLoading } = useCreateThreadMutation();
	const { updateThread, isLoading: isUpdateThreadLoading } = useUpdateThreadMutation();
	const isLoading = isCreateThreadLoading || isUpdateThreadLoading;
	const activeCharacters = [].concat(
		characters.sort(sortCharacters).filter((c) => !c.isOnHiatus)
	);

	const getTagValues = () => {
		if (!actedThread?.threadTags) {
			return [];
		}
		return actedThread.threadTags.map((t) => t.tagText);
	};

	const submitForm = (formData) => {
		const upsertFn = formData.threadId ? updateThread : createThread;
		const submitData = {
			...formData,
			threadTags: formData.threadTags.map((t) => ({ tagText: t }))
		};
		upsertFn(submitData)
			.then(() => {
				setIsModalOpen(false);
				toast.success(formData.threadId ? 'Thread updated!' : 'Thread created!');
			})
			.catch(() => {
				toast.error(
					`There was an error ${formData.threadId ? 'updating' : 'creating'} this thread.`
				);
			});
	};
	const { onFormSubmit, inputProps } = useValidatedForm(submitForm, validator, actedThread);
	return (
		<Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} backdrop>
			<form onSubmit={onFormSubmit}>
				<ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
					{actedThread?.threadId ? 'Edit Thread' : 'Add New Thread'}
				</ModalHeader>
				<ModalBody>
					<TooltipForm
						Renderable={UpsertThreadForm}
						actedThread={actedThread}
						inputProps={inputProps}
						characters={activeCharacters}
						tagValues={getTagValues()}
					/>
				</ModalBody>
				<ModalFooter>
					{isLoading && <LoadingIndicator />}
					<Button color="primary">
						{actedThread?.threadId ? 'Edit Thread' : 'Add Thread'}
					</Button>{' '}
					<Button color="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>
						Cancel
					</Button>
				</ModalFooter>
			</form>
		</Modal>
	);
};

UpsertThreadModal.propTypes = propTypes;
UpsertThreadModal.defaultProps = {
	characters: [],
	actedThread: {}
};
export default UpsertThreadModal;
