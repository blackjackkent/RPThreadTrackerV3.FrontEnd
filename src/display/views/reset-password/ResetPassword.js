import React from 'react';
import { CardBody } from 'reactstrap';
import { toast } from 'react-toastify';
import { useResetPasswordMutation } from '~/infrastructure/hooks/mutations';
import TooltipForm from '../../forms/TooltipForm';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';
import ResetPasswordForm from '../../forms/reset-password/ResetPasswordForm';
import { getQuery } from '../../../utility';

const ResetPassword = () => {
	const {
		resetPassword,
		isLoading: isSubmitResetPasswordLoading,
		isError: isSubmitResetPasswordError,
		error: resetPasswordError
	} = useResetPasswordMutation();

	const submitResetPassword = (formData) => {
		const queryData = getQuery();
		const submissionData = {
			...formData,
			email: queryData.email,
			code: queryData.code
		};
		resetPassword(submissionData).then(() => {
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
				<h1>Reset Password</h1>
				<p className="text-muted">Enter your new password below.</p>
				{isSubmitResetPasswordError && (
					<div className="has-danger">
						<p className="form-control-feedback">{resetPasswordError.message}</p>
					</div>
				)}
				<TooltipForm Renderable={ResetPasswordForm} onSubmit={submitResetPassword} />
			</CardBody>
		</Card>
	);
};
export default ResetPassword;
