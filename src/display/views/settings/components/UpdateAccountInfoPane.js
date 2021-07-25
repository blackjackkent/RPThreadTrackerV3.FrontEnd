import React, { useEffect } from 'react';
import { TabPane, Row, Button, Col, CardHeader, CardBody } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { toast } from 'react-toastify';
import Card from '../../../shared/styled/Card';
import UpdateAccountInfoForm from '../../../forms/update-account-info/UpdateAccountInfoForm';
import { useFormReducer } from '~/infrastructure/hooks';
import { useUpdateAccountInfoMutation } from '~/infrastructure/hooks/mutations';
import { useUserProfileQuery } from '~/infrastructure/hooks/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UpdateAccountInfoPane = () => {
	const [formData, onInputChange, setFormData] = useFormReducer();
	const { updateAccountInfo } = useUpdateAccountInfoMutation();
	const { data: user } = useUserProfileQuery();
	useEffect(() => {
		setFormData(user);
	}, [user, setFormData]);
	const submitUpdateAccountInfo = () => {
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
					<AvForm
						data-spec="account-info-form-container"
						onValidSubmit={() => submitUpdateAccountInfo(formData)}
					>
						<UpdateAccountInfoForm handleInputChange={onInputChange} user={formData} />
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
export default UpdateAccountInfoPane;
