// #region imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { toast } from 'react-toastify';
import TooltipForm from '~/display/forms/TooltipForm';
import UpsertThreadForm from '~/display/forms/upsert-thread/UpsertThreadForm';
import Modal from '~/display/shared/styled/Modal';
import { sortCharacters } from '~/utility';
import { useFormReducer } from '~/infrastructure/hooks';
import LoadingIndicator from '../loading/LoadingIndicator';
import { useCreateThreadMutation, useUpdateThreadMutation } from '~/infrastructure/hooks/mutations';
// #endregion imports

const propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})),
	actedThread: PropTypes.shape({})
};

const UpsertThreadModal = (props) => {
	const [thread, onInputChange, setFormData] = useFormReducer();
	const { createThread, isLoading: isCreateThreadLoading } = useCreateThreadMutation();
	const { updateThread, isLoading: isUpdateThreadLoading } = useUpdateThreadMutation();
	const isLoading = isCreateThreadLoading || isUpdateThreadLoading;
	const { actedThread, characters, isModalOpen, setIsModalOpen } = props;
	useEffect(() => {
		if (!actedThread) {
			return;
		}
		setFormData(actedThread);
	}, [setFormData, actedThread]);
	const activeCharacters = [].concat(
		characters.sort(sortCharacters).filter((c) => !c.isOnHiatus)
	);
	const handleTagAdded = (tagValue) => {
		let currentTags = thread.threadTags;
		if (!currentTags) {
			currentTags = [];
		}
		if (currentTags.find((t) => t.tagText === tagValue)) {
			return;
		}
		const newTags = currentTags.concat({ tagText: tagValue });
		onInputChange({
			target: {
				name: 'threadTags',
				value: newTags
			}
		});
	};

	const handleTagRemoved = (tagValue) => {
		let currentTags = thread.threadTags;
		if (!currentTags) {
			currentTags = [];
		}
		const newTags = currentTags.filter((tag) => tag.tagText !== tagValue);
		onInputChange({
			target: {
				name: 'threadTags',
				value: newTags
			}
		});
	};

	const getTagValues = () => {
		if (!thread || !thread.threadTags) {
			return [];
		}
		return thread.threadTags.map((t) => t.tagText);
	};

	const submitForm = () => {
		const upsertFn = thread.threadId ? updateThread : createThread;
		upsertFn(thread)
			.then(() => {
				setIsModalOpen(false);
				toast.success(thread.threadId ? 'Thread updated!' : 'Thread created!');
			})
			.catch(() => {
				toast.error(
					`There was an error ${thread.threadId ? 'updating' : 'creating'} this thread.`
				);
			});
	};

	return (
		<Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} backdrop>
			<AvForm onValidSubmit={() => submitForm(thread)}>
				<ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
					{thread && thread.threadId ? 'Edit Thread' : 'Add New Thread'}
				</ModalHeader>
				<ModalBody>
					<TooltipForm
						Renderable={UpsertThreadForm}
						thread={thread}
						onInputChange={onInputChange}
						characters={activeCharacters}
						handleTagAdded={handleTagAdded}
						handleTagRemoved={handleTagRemoved}
						tagValues={getTagValues()}
					/>
				</ModalBody>
				<ModalFooter>
					{isLoading && <LoadingIndicator />}
					<Button color="primary">
						{thread.threadId ? 'Edit Thread' : 'Add Thread'}
					</Button>{' '}
					<Button color="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>
						Cancel
					</Button>
				</ModalFooter>
			</AvForm>
		</Modal>
	);
};

UpsertThreadModal.propTypes = propTypes;
UpsertThreadModal.defaultProps = {
	characters: [],
	actedThread: {}
};
export default UpsertThreadModal;
