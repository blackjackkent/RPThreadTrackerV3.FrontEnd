import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, CardBody, Button, Label } from 'reactstrap';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import Card from '~/display/shared/styled/Card';
import useValidatedForm from '~/display/forms/validated-form/useValidatedForm';
import ValidatedTextInput from '~/display/forms/validated-form/ValidatedTextInput';
import ValidatedErrorMessage from '~/display/forms/validated-form/ValidatedErrorMessage';
import validator from '../_loginFormValidator';

const propTypes = {
	isLoading: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

const LoginForm = ({ isLoading, errorMessage, onInputChange, onSubmit }) => {
	const { register, onFormSubmit, errors } = useValidatedForm(onSubmit);
	return (
		<Card className="login-box p-4">
			<CardBody className="card-body">
				{isLoading && (
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

				<form onSubmit={onFormSubmit(onSubmit)}>
					<h1>Login</h1>
					<p className="text-muted">Sign in to RPThreadTracker</p>
					{errorMessage && (
						<div className="has-danger">
							<p className="form-control-feedback">{errorMessage}</p>
						</div>
					)}
					<div>
						<div className="form-group">
							<Label for="username">Username</Label>
							<ValidatedTextInput
								register={register}
								validator={validator}
								inputName="username"
								errors={errors}
								onChange={onInputChange}
								placeholder="Username"
							/>
							<ValidatedErrorMessage error={errors.username} />
						</div>
						<div className="form-group">
							<Label for="password">Password</Label>
							<ValidatedTextInput
								register={register}
								validator={validator}
								inputName="password"
								onChange={onInputChange}
								errors={errors}
								placeholder="Password"
							/>
							<ValidatedErrorMessage error={errors.password} />
						</div>
					</div>
					<Row>
						<Col xs="6">
							<Button color="primary" role="button" className="px-4">
								Login
							</Button>
						</Col>
						<Col xs="6" className="text-right text-muted">
							<Link href="/register" to="/register">
								Sign up
							</Link>{' '}
							&bull;{' '}
							<Link href="/forgotpassword" to="/forgotpassword">
								Forgot password?
							</Link>
						</Col>
					</Row>
				</form>
			</CardBody>
		</Card>
	);
};

LoginForm.propTypes = propTypes;
export default LoginForm;
