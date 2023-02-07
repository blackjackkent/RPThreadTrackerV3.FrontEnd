import React from 'react';
import { CardBody } from 'reactstrap';
import { toast } from 'react-toastify';
import { useForgotPasswordMutation } from '~/infrastructure/hooks/mutations';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';
import ForgotPasswordForm from '../../forms/forgot-password/ForgotPasswordForm';

const ForgotPassword = () => {
	const {
		requestPasswordReset,
		isLoading: isSubmitForgotPasswordLoading,
		isError: isForgotPasswordError,
		error: forgotPasswordError
	} = useForgotPasswordMutation();
	const submitForgotPassword = (formData) => {
		requestPasswordReset(formData).then(() => {
			toast.success('Please check your email for a link to reset your password.');
		});
	};
	return (
		<Card className="mx-4">
			<CardBody className="p-4">
				{isSubmitForgotPasswordLoading && (
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
				<h1>Forgot your password?</h1>
				<p className="text-muted">
					Enter your email address below and we will email you a link to reset your
					password.
				</p>
				{isForgotPasswordError && (
					<div className="has-danger">
						<p className="form-control-feedback">{forgotPasswordError.message}</p>
					</div>
				)}
				<ForgotPasswordForm onSubmit={submitForgotPassword} />
			</CardBody>
		</Card>
	);
};
export default ForgotPassword;
