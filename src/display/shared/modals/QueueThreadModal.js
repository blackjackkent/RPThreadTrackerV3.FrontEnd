import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import GenericConfirmationModal from './GenericConfirmationModal';
import { useUpdateThreadMutation } from '~/infrastructure/hooks/mutations';

const propTypes = {
	actedThread: PropTypes.shape({
		dateMarkedQueued: PropTypes.string.isRequired,
		userTitle: PropTypes.string.isRequired
	}),
	isQueueing: PropTypes.bool,
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired
};
const defaultProps = {
	isQueueing: true,
	actedThread: {}
};

const QueueThreadModal = ({ actedThread, isQueueing, isModalOpen, setIsModalOpen }) => {
	const { updateThread, isLoading } = useUpdateThreadMutation();
	const toggleThreadQueued = (thread) => {
		const dateMarkedQueued = isQueueing ? new Date(Date.now()) : null;
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
			submitButtonText={isQueueing ? 'Mark Thread as Queued' : 'Unmark Thread as Queued'}
			closeButtonText="Cancel"
			isLoading={isLoading}
			data={actedThread}
			headerText="Confirm Thread Update"
			bodyText={
				<>
					<p>
						Are you sure you want to {isQueueing ? 'mark' : 'unmark'}{' '}
						<strong>{actedThread?.userTitle}</strong> as queued?
					</p>
					{isQueueing && (
						<p>
							(It will be moved to the &quot;Queued Threads&quot; panel until its most{' '}
							recent update is newer than the time you marked it. You can unmark it{' '}
							again at any time from the &quot;Queued Threads&quot; panel.)
						</p>
					)}
				</>
			}
		/>
	);
};
QueueThreadModal.propTypes = propTypes;
QueueThreadModal.defaultProps = defaultProps;
export default QueueThreadModal;
