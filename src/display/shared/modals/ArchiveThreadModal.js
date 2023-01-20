import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useUpdateThreadMutation } from '~/infrastructure/hooks/mutations';
import GenericConfirmationModal from './GenericConfirmationModal';

const propTypes = {
	actedThread: PropTypes.shape({
		isArchived: PropTypes.bool.isRequired,
		userTitle: PropTypes.string.isRequired
	}),
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired
};

const ArchiveThreadModal = ({ actedThread, isModalOpen, setIsModalOpen }) => {
	const { updateThread, isLoading } = useUpdateThreadMutation();
	const submitArchiveThread = (thread) => {
		const updated = {
			...thread,
			isArchived: !thread.isArchived
		};
		updateThread(updated)
			.then(() => {
				setIsModalOpen(false);
				toast.success('Thread updated!');
			})
			.catch(() => {
				toast.error(`There was an error updating this thread.`);
			});
	};
	return (
		<GenericConfirmationModal
			isModalOpen={isModalOpen}
			setIsModalOpen={setIsModalOpen}
			submitForm={submitArchiveThread}
			submitButtonText={actedThread?.isArchived ? 'Unarchive Thread' : 'Archive Thread'}
			closeButtonText="Cancel"
			isLoading={isLoading}
			data={actedThread}
			headerText="Confirm Thread Update"
			bodyText={
				<span>
					Are you sure you want to {actedThread?.isArchived ? 'unarchive' : 'archive'}{' '}
					<strong>{actedThread?.userTitle}</strong>?{' '}
					{!actedThread?.isArchived &&
						'(You can unarchive it again at any time from the "Archived Threads" panel.)'}
				</span>
			}
		/>
	);
};
ArchiveThreadModal.propTypes = propTypes;
ArchiveThreadModal.defaultProps = {
	actedThread: {}
};
export default ArchiveThreadModal;
