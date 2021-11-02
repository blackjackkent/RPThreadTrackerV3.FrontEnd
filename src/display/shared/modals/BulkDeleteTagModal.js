import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import GenericConfirmationModal from './GenericConfirmationModal';
import { useDeleteTagMutation } from '~/infrastructure/hooks/mutations';

const propTypes = {
	tag: PropTypes.string,
	onComplete: PropTypes.func,
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired
};

const BulkDeleteTagModal = ({ tag, onComplete, isModalOpen, setIsModalOpen }) => {
	const { bulkDeleteTag, isLoading } = useDeleteTagMutation();
	const submitUpdateTag = () => {
		bulkDeleteTag({ tag })
			.then(() => {
				setIsModalOpen(false);
				toast.success(`${tag} removed from all threads!`);
				onComplete();
			})
			.catch(() => {
				toast.error(`There was an error removing the tag.`);
				onComplete();
			});
	};
	return (
		<GenericConfirmationModal
			isModalOpen={isModalOpen}
			setIsModalOpen={setIsModalOpen}
			submitForm={submitUpdateTag}
			submitButtonText="Update"
			closeButtonText="Cancel"
			isLoading={isLoading}
			headerText="Confirm Tag Removal"
			bodyText={
				<span>
					Are you sure you want to remove the tag <strong>{tag}</strong> from all threads
					it is assigned to?
				</span>
			}
		/>
	);
};
BulkDeleteTagModal.propTypes = propTypes;
BulkDeleteTagModal.defaultProps = {
	tag: '',
	onComplete: () => {}
};
export default BulkDeleteTagModal;
