import React from 'react';
import { TabPane, CardHeader, CardBody } from 'reactstrap';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUpdateAccountInfoMutation } from '~/infrastructure/hooks/mutations';
import { useUserProfileQuery } from '~/infrastructure/hooks/queries';
import Card from '../../../shared/styled/Card';
import UpdateAccountInfoForm from '../../../forms/update-account-info/UpdateAccountInfoForm';

const UpdateAccountInfoPane = () => {
	const { updateAccountInfo } = useUpdateAccountInfoMutation();
	const { data: user } = useUserProfileQuery();
	const submitUpdateAccountInfo = (formData) => {
		updateAccountInfo(formData)
			.then(() => {
				toast.success('Your account information was successfully updated.');
			})
			.catch((err) => {
				const errors = err.response.data;
				const message = `There was a problem updating your account info: ${
					errors.length ? errors[0] : ''
				}`;
				toast.error(message);
			});
	};
	return (
		<TabPane tabId="change-username">
			<Card>
				<CardHeader>
					<FontAwesomeIcon icon={['fas', 'user']} /> Change Username/Email
				</CardHeader>
				<CardBody className="card-body">
					<UpdateAccountInfoForm onSubmit={submitUpdateAccountInfo} user={user} />
				</CardBody>
			</Card>
		</TabPane>
	);
};
export default UpdateAccountInfoPane;
