import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AvForm } from 'availity-reactstrap-validation';
import { CardBody, Button, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import * as actions from '../../../infrastructure/actions';
import TooltipForm from '../../forms/TooltipForm';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';
import ResetPasswordForm from '../../forms/reset-password/ResetPasswordForm';
import { getQuery } from '../../../utility';
import { useFormReducer } from '~/infrastructure/hooks';
import { useResetPasswordMutation } from '~/infrastructure/hooks/mutations';

const ResetPassword = () => {
	const [formData, onInputChange, setFormData] = useFormReducer();
	const {
		resetPassword,
		isLoading: isSubmitResetPasswordLoading,
		isError: isSubmitResetPasswordError,
		error: resetPasswordError
	} = useResetPasswordMutation();
	useEffect(() => {
		setFormData({
			email: getQuery().email,
			code: getQuery().code
		});
	}, [setFormData]);

	const submitResetPassword = () => {
		resetPassword(formData).then(() => {
			toast.success('Success. You can now log in with your updated password');
		});
	};
	return (
		<Card className="mx-4">
			<CardBody className="p-4">
				{isSubmitResetPasswordLoading && (
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
					data-spec="reset-password-form-container"
					onValidSubmit={submitResetPassword}
				>
					<h1>Reset Password</h1>
					<p className="text-muted">Enter your new password below.</p>
					{isSubmitResetPasswordError && (
						<div className="has-danger">
							<p
								data-spec="reset-password-server-error"
								className="form-control-feedback"
							>
								{resetPasswordError.message}
							</p>
						</div>
					)}
					<TooltipForm Renderable={ResetPasswordForm} handleInputChange={onInputChange} />
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
export default ResetPassword;
