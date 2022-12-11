import React from 'react';
import { Redirect } from 'react-router-dom';
import { CardBody } from 'reactstrap';
import { useLoginMutation, useRegisterMutation } from '~/infrastructure/hooks/mutations';
import RegisterForm from '../../forms/register/RegisterForm';
import TooltipForm from '../../forms/TooltipForm';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';

const Register = () => {
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

	const handleRegistrationSubmit = (formData) => {
		reset();
		submitUserRegistration(formData).then(() => {
			submitLogin({ username: formData.username, password: formData.password });
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
				<h1>Register</h1>
				<p className="text-muted">Create your RPThreadTracker account</p>
				{isUserRegistrationError && (
					<div className="has-danger">
						<p className="form-control-feedback">
							{registrationError?.response?.data?.map((e) => (
								<span key={e}>
									{e}
									<br />
								</span>
							))}
						</p>
					</div>
				)}
				<TooltipForm Renderable={RegisterForm} onSubmit={handleRegistrationSubmit} />
			</CardBody>
		</Card>
	);
};
export default Register;
