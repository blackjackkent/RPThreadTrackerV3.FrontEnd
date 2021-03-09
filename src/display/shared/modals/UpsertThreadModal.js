// #region imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import TooltipForm from '~/display/forms/TooltipForm';
import UpsertThreadForm from '~/display/forms/upsert-thread/UpsertThreadForm';
import Modal from '~/display/shared/styled/Modal';
import { sortCharacters } from '~/utility';
import { useFormReducer } from '~/infrastructure/hooks';
import LoadingIndicator from '../loading/LoadingIndicator';
// #endregion imports

const propTypes = {
	threadToEdit: PropTypes.shape({
		threadId: PropTypes.string,
		threadTags: PropTypes.arrayOf(PropTypes.shape({}))
	}),
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({}))
};

const UpsertThreadModal = (props) => {
	const [thread, onInputChange, setFormData] = useFormReducer();
	const { isLoading, threadToEdit, characters, isModalOpen, setIsModalOpen, submitForm } = props;
	useEffect(() => {
		if (!threadToEdit) {
			return;
		}
		setFormData(threadToEdit);
	}, [setFormData, threadToEdit]);
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

	return (
		<Modal
			data-spec="upsert-thread-modal"
			isOpen={isModalOpen}
			toggle={() => setIsModalOpen(!isModalOpen)}
			backdrop
		>
			<AvForm data-spec="upsert-thread-modal-form" onValidSubmit={() => submitForm(thread)}>
				<ModalHeader
					data-spec="upsert-thread-modal-header"
					toggle={() => setIsModalOpen(!isModalOpen)}
				>
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
					<Button
						data-spec="upsert-thread-modal-close-button"
						color="secondary"
						onClick={() => setIsModalOpen(!isModalOpen)}
					>
						Cancel
					</Button>
				</ModalFooter>
			</AvForm>
		</Modal>
	);
};

UpsertThreadModal.propTypes = propTypes;
UpsertThreadModal.defaultProps = {
	threadToEdit: {},
	characters: []
};
export default UpsertThreadModal;
