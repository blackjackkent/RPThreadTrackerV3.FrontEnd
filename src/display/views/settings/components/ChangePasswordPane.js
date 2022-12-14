import React from 'react';
import { TabPane, CardHeader, CardBody } from 'reactstrap';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useChangePasswordMutation } from '~/infrastructure/hooks/mutations';
import Card from '../../../shared/styled/Card';
import TooltipForm from '../../../forms/TooltipForm';
import ChangePasswordForm from '../../../forms/change-password/ChangePasswordForm';

const ChangePasswordPane = () => {
	const { changePassword } = useChangePasswordMutation();
	const submitChangePasswordForm = (formData) => {
		changePassword(formData)
			.then(() => {
				toast.success('Success. You can now log in with your updated password');
			})
			.catch((err) => {
				const errors = err.response.data;
				const message = `There was a problem updating your password: ${
					errors.length ? errors[0] : ''
				}`;
				toast.error(message);
			});
	};
	return (
		<TabPane tabId="change-password">
			<Card>
				<CardHeader>
					<FontAwesomeIcon icon={['fas', 'key']} /> Change Password
				</CardHeader>
				<CardBody className="card-body">
					<TooltipForm
						Renderable={ChangePasswordForm}
						onSubmit={submitChangePasswordForm}
					/>
				</CardBody>
			</Card>
		</TabPane>
	);
};
export default ChangePasswordPane;
