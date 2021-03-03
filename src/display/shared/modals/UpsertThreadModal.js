// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import TooltipForm from '~/display/forms/TooltipForm';
import UpsertThreadForm from '~/display/forms/upsert-thread/UpsertThreadForm';
import Modal from '~/display/shared/styled/Modal';
import { sortCharacters } from '~/utility';
// #endregion imports

const propTypes = {
	thread: PropTypes.shape({
		threadId: PropTypes.string,
		threadTags: PropTypes.arrayOf(PropTypes.shape({}))
	}).isRequired,
	isModalOpen: PropTypes.bool.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onModalClose: PropTypes.func,
	onFormSubmit: PropTypes.func.isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({}))
};

const UpsertThreadModal = (props) => {
	const { isModalOpen, onModalClose, onFormSubmit, characters, thread, onInputChange } = props;
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
		if (!thread.threadTags) {
			return [];
		}
		return thread.threadTags.map((t) => t.tagText);
	};

	return (
		<Modal data-spec="upsert-thread-modal" isOpen={isModalOpen} toggle={onModalClose} backdrop>
			<AvForm data-spec="upsert-thread-modal-form" onValidSubmit={() => onFormSubmit(thread)}>
				<ModalHeader data-spec="upsert-thread-modal-header" toggle={onModalClose}>
					{thread && thread.threadId ? 'Edit Thread' : 'Add New Thread'}
				</ModalHeader>
				<ModalBody>
					<TooltipForm
						Renderable={UpsertThreadForm}
						thread={thread}
						characters={activeCharacters}
						onInputChange={onInputChange}
						handleTagAdded={handleTagAdded}
						handleTagRemoved={handleTagRemoved}
						tagValues={getTagValues()}
					/>
				</ModalBody>
				<ModalFooter>
					<Button color="primary">
						{thread.threadId ? 'Edit Thread' : 'Add Thread'}
					</Button>{' '}
					<Button
						data-spec="upsert-thread-modal-close-button"
						color="secondary"
						onClick={onModalClose}
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
	onModalClose: null,
	characters: []
};
export default UpsertThreadModal;
