import React, { useState } from 'react';
import { TabPane, Button, CardHeader, CardBody } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../../shared/styled/Card';
import { useDeleteAccountMutation } from '~/infrastructure/hooks/mutations';
import GenericConfirmationModal from '~/display/shared/modals/GenericConfirmationModal';

const DeleteAccountPane = () => {
	const history = useHistory();
	const [isDeleteAccountConfirmationModalOpen, setIsDeleteAccountConfirmationModalOpen] =
		useState(false);
	const { deleteAccount, isLoading: isDeleteAccountLoading } = useDeleteAccountMutation();

	const submitDeleteAccount = () => {
		deleteAccount()
			.then(() => {
				history.push('/logout');
			})
			.catch(() => {
				toast.error(`There was a problem deleting your account.`);
			});
	};
	const openDeleteAccountModal = () => {
		setIsDeleteAccountConfirmationModalOpen(true);
	};
	return (
		<TabPane tabId="delete-account">
			<GenericConfirmationModal
				isModalOpen={isDeleteAccountConfirmationModalOpen}
				setIsModalOpen={setIsDeleteAccountConfirmationModalOpen}
				submitForm={submitDeleteAccount}
				submitButtonText="Confirm Deletion"
				closeButtonText="Cancel"
				isLoading={isDeleteAccountLoading}
				headerText="Really Delete Account?"
				bodyText={
					<span>
						Are you sure you want to delete your account?{' '}
						<strong>This action cannot be undone.</strong> You will be unable to
						retrieve tracking information for your characters or threads in the future,
						unless you create a new account and re-add them.
					</span>
				}
			/>
			<Card>
				<CardHeader>
					<FontAwesomeIcon icon={['fas', 'trash-alt']} /> Delete Account
				</CardHeader>
				<CardBody className="card-body text-center">
					<Button type="submit" color="danger" onClick={openDeleteAccountModal}>
						Delete Account
					</Button>
				</CardBody>
			</Card>
		</TabPane>
	);
};
export default DeleteAccountPane;
