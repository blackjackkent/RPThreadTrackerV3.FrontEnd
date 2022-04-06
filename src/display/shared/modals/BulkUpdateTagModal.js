import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import GenericConfirmationModal from './GenericConfirmationModal';
import { useUpdateTagMutation } from '~/infrastructure/hooks/mutations';

const propTypes = {
	currentTag: PropTypes.string,
	replacementTag: PropTypes.string,
	onComplete: PropTypes.func,
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired
};

const BulkUpdateTagModal = ({
	currentTag,
	replacementTag,
	onComplete,
	isModalOpen,
	setIsModalOpen
}) => {
	const { bulkUpdateTag, isLoading } = useUpdateTagMutation();
	const submitUpdateTag = () => {
		bulkUpdateTag({ currentTag, replacementTag })
			.then(() => {
				setIsModalOpen(false);
				toast.success(`${currentTag} updated to ${replacementTag}!`);
				onComplete();
			})
			.catch(() => {
				toast.error(`There was an error updating the tag.`);
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
			headerText="Confirm Tag Bulk Update"
			bodyText={
				<span>
					Are you sure you want to update the tag <strong>{currentTag}</strong> to{' '}
					<strong>{replacementTag}</strong>?
				</span>
			}
		/>
	);
};
BulkUpdateTagModal.propTypes = propTypes;
BulkUpdateTagModal.defaultProps = {
	currentTag: '',
	replacementTag: '',
	onComplete: () => {}
};
export default BulkUpdateTagModal;
