import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { CardBody, Button, Row, Col } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import RegisterForm from '../../forms/register/RegisterForm';
import TooltipForm from '../../forms/TooltipForm';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';
import { useLoginMutation, useRegisterMutation } from '~/infrastructure/hooks/mutations';
import { useFormReducer } from '~/infrastructure/hooks';

const Register = () => {
	const [formData, onInputChange] = useFormReducer();
	const {
		submitUserRegistration,
		reset,
		isLoading: isUserRegistrationLoading,
		isError: isUserRegistrationError,
		isSuccess: isUserRegistrationSuccess,
		error: registrationError
	} = useRegisterMutation();
	const {
		submitLogin,
		isLoading: isLoginLoading,
		isSuccess: isLoginSuccess
	} = useLoginMutation();

	const handleRegistrationSubmit = () => {
		reset();
		submitUserRegistration(formData).then(() => {
			submitLogin({ username: formData.username, password: formData.password }).then();
		});
	};

	if (isUserRegistrationSuccess && isLoginSuccess) {
		return (
			<div>
				<Redirect to="/dashboard" />
			</div>
		);
	}

	const shouldDisplayLoadingIndicator = isUserRegistrationLoading || isLoginLoading;
	console.log(registrationError?.response);
	return (
		<Card className="mx-4">
			<CardBody className="p-4">
				{shouldDisplayLoadingIndicator && (
					<LoadingIndicator
						style={{
							width: 50,
							height: 50,
							position: 'absolute',
							top: 0,
							right: 0
						}}
					/>
				)}
				<AvForm
					data-spec="registration-form-container"
					onValidSubmit={handleRegistrationSubmit}
				>
					<h1>Register</h1>
					<p className="text-muted">Create your RPThreadTracker account</p>
					{isUserRegistrationError && (
						<div className="has-danger">
							<p data-spec="register-server-error" className="form-control-feedback">
								{registrationError?.response?.data?.map((e) => (
									<span key={e}>
										{e}
										<br />
									</span>
								))}
							</p>
						</div>
					)}
					<TooltipForm Renderable={RegisterForm} handleInputChange={onInputChange} />
					<Row>
						<Col xs="6">
							<Button color="primary" className="px-4">
								Create Account
							</Button>
						</Col>
						<Col xs="6" className="text-right text-muted">
							Already have an account?{' '}
							<Link href="/login" to="/login">
								Login
							</Link>
						</Col>
					</Row>
				</AvForm>
			</CardBody>
		</Card>
	);
};
export default Register;
