import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useUntrackThreadMutation } from '~/infrastructure/hooks/mutations';
import GenericConfirmationModal from './GenericConfirmationModal';

const propTypes = {
	actedThreads: PropTypes.arrayOf(PropTypes.shape({ userTitle: PropTypes.string.isRequired })),
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired
};

const BulkUntrackThreadsModal = ({ actedThreads, isModalOpen, setIsModalOpen }) => {
	const { bulkUntrackThreads, isLoading } = useUntrackThreadMutation();
	const submitUntrackThreads = () => {
		bulkUntrackThreads(actedThreads)
			.then(() => {
				setIsModalOpen(false);
				toast.success(`${actedThreads.length} threads untracked!`);
			})
			.catch(() => {
				toast.error(`There was an error untracking one or more of the selected threads.`);
			});
	};
	return (
		<GenericConfirmationModal
			isModalOpen={isModalOpen}
			setIsModalOpen={setIsModalOpen}
			submitForm={submitUntrackThreads}
			submitButtonText="Untrack"
			closeButtonText="Cancel"
			isLoading={isLoading}
			data={actedThreads}
			headerText="Confirm Thread Untracking"
			bodyText={
				<span>
					Are you sure you want to untrack <strong>{actedThreads.length} threads</strong>?
				</span>
			}
		/>
	);
};
BulkUntrackThreadsModal.propTypes = propTypes;
BulkUntrackThreadsModal.defaultProps = {
	actedThreads: []
};
export default BulkUntrackThreadsModal;
