import React from 'react';
import { TabPane, Col, Row, Button, CardHeader, CardBody } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useChangePasswordMutation } from '~/infrastructure/hooks/mutations';
import { useFormReducer } from '~/infrastructure/hooks';
import Card from '../../../shared/styled/Card';
import TooltipForm from '../../../forms/TooltipForm';
import ChangePasswordForm from '../../../forms/change-password/ChangePasswordForm';

const ChangePasswordPane = () => {
	const [formData, onInputChange] = useFormReducer();
	const { changePassword } = useChangePasswordMutation();
	const submitChangePasswordForm = () => {
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
					<AvForm onValidSubmit={() => submitChangePasswordForm(formData)}>
						<TooltipForm
							Renderable={ChangePasswordForm}
							handleInputChange={onInputChange}
						/>
						<Row>
							<Col className="text-right">
								<Button type="submit" color="primary">
									Submit
								</Button>
							</Col>
						</Row>
					</AvForm>
				</CardBody>
			</Card>
		</TabPane>
	);
};
export default ChangePasswordPane;
