import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import GenericConfirmationModal from './GenericConfirmationModal';
import useDeletePublicViewMutation from '~/infrastructure/hooks/mutations/public-views/useDeletePublicViewMutation';

const propTypes = {
	actedView: PropTypes.shape({ name: PropTypes.string.isRequired }),
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired
};

const DeletePublicViewModal = ({ actedView, isModalOpen, setIsModalOpen }) => {
	const { deletePublicView, isLoading } = useDeletePublicViewMutation();
	const submitDeletePublicView = () => {
		deletePublicView(actedView)
			.then(() => {
				setIsModalOpen(false);
				toast.success('View deleted!');
			})
			.catch(() => {
				toast.error(`There was an error deleting this view.`);
			});
	};
	return (
		<GenericConfirmationModal
			isModalOpen={isModalOpen}
			setIsModalOpen={setIsModalOpen}
			submitForm={submitDeletePublicView}
			submitButtonText="Delete"
			closeButtonText="Cancel"
			isLoading={isLoading}
			data={actedView}
			headerText="Confirm View Deletion"
			bodyText={
				<span>
					Are you sure you want to delete <strong>{actedView?.name}</strong>?
				</span>
			}
		/>
	);
};
DeletePublicViewModal.propTypes = propTypes;
DeletePublicViewModal.defaultProps = {
	actedView: {}
};
export default DeletePublicViewModal;
