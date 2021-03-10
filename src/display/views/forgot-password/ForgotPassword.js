import React from 'react';
import { Link } from 'react-router-dom';
import { AvForm } from 'availity-reactstrap-validation';
import { CardBody, Button, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';
import ForgotPasswordForm from '../../forms/forgot-password/ForgotPasswordForm';
import { useFormReducer } from '~/infrastructure/hooks';
import { useForgotPasswordMutation } from '~/infrastructure/hooks/mutations';

const ForgotPassword = () => {
	const [formData, onInputChange] = useFormReducer();
	const {
		requestPasswordReset,
		isLoading: isSubmitForgotPasswordLoading,
		isError: isForgotPasswordError,
		error: forgotPasswordError
	} = useForgotPasswordMutation();
	const submitForgotPassword = () => {
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
				<AvForm
					data-spec="forgot-password-form-container"
					onValidSubmit={() => submitForgotPassword(formData)}
				>
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
					<ForgotPasswordForm handleInputChange={onInputChange} />
					<Row>
						<Col xs="6">
							<Button color="primary" className="px-4">
								Request
							</Button>
						</Col>
						<Col xs="6" className="text-right text-muted">
							<span className="pull-right">
								<Link href="/login" to="/login">
									Back to Login
								</Link>
							</span>
						</Col>
					</Row>
				</AvForm>
			</CardBody>
		</Card>
	);
};
export default ForgotPassword;
