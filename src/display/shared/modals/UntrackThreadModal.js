import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import GenericConfirmationModal from './GenericConfirmationModal';
import { useUntrackThreadMutation } from '~/infrastructure/hooks/mutations';

const propTypes = {
	actedThread: PropTypes.shape({ userTitle: PropTypes.string.isRequired }),
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired
};

const UntrackThreadModal = ({ actedThread, isModalOpen, setIsModalOpen }) => {
	const { untrackThread, isLoading } = useUntrackThreadMutation();
	const submitUntrackThread = () => {
		untrackThread(actedThread)
			.then(() => {
				setIsModalOpen(false);
				toast.success('Thread untracked!');
			})
			.catch(() => {
				toast.error(`There was an error untracking this thread.`);
			});
	};
	return (
		<GenericConfirmationModal
			isModalOpen={isModalOpen}
			setIsModalOpen={setIsModalOpen}
			submitForm={submitUntrackThread}
			submitButtonText="Untrack"
			closeButtonText="Cancel"
			isLoading={isLoading}
			data={actedThread}
			headerText="Confirm Thread Untracking"
			bodyText={
				<span>
					Are you sure you want to untrack <strong>{actedThread?.userTitle}</strong>?
				</span>
			}
		/>
	);
};
UntrackThreadModal.propTypes = propTypes;
UntrackThreadModal.defaultProps = {
	actedThread: {}
};
export default UntrackThreadModal;
