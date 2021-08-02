import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import GenericConfirmationModal from './GenericConfirmationModal';
import { useUpdateThreadMutation } from '~/infrastructure/hooks/mutations';

const propTypes = {
	actedThread: PropTypes.shape({
		dateMarkedQueued: PropTypes.number.isRequired,
		userTitle: PropTypes.string.isRequired
	}),
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired
};

const QueueThreadModal = ({ actedThread, isModalOpen, setIsModalOpen }) => {
	const { updateThread, isLoading } = useUpdateThreadMutation();
	const toggleThreadQueued = (thread) => {
		const dateMarkedQueued = thread.dateMarkedQueued ? null : new Date(Date.now());
		const updated = {
			...thread,
			dateMarkedQueued
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
			submitForm={toggleThreadQueued}
			submitButtonText={
				actedThread?.dateMarkedQueued ? 'Unmark Thread as Queued' : 'Mark Thread as Queued'
			}
			closeButtonText="Cancel"
			isLoading={isLoading}
			data={actedThread}
			headerText="Confirm Thread Update"
			bodyText={
				<span>
					Are you sure you want to {actedThread?.dateMarkedQueued ? 'unmark' : 'mark'}{' '}
					<strong>{actedThread?.userTitle}</strong> as queued?{' '}
					{!actedThread?.dateMarkedQueued &&
						'(It will be moved to the "Queued Threads" panel until its most recent update is newer ' +
							'than the time you marked it. You can unmark it again at any time from the ' +
							'"Queued Threads" panel.)'}
				</span>
			}
		/>
	);
};
QueueThreadModal.propTypes = propTypes;
QueueThreadModal.defaultProps = {
	actedThread: {}
};
export default QueueThreadModal;
