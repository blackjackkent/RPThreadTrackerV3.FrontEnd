import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, CardBody, Button, Label } from 'reactstrap';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import Card from '~/display/shared/styled/Card';
import useValidatedForm from '~/display/forms/validated-form/useValidatedForm';
import ValidatedTextInput from '~/display/forms/validated-form/ValidatedTextInput';
import validator from './_validator';

const propTypes = {
	isLoading: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
};

const LoginForm = ({ isLoading, errorMessage, onSubmit }) => {
	const { onFormSubmit, inputProps } = useValidatedForm(onSubmit, validator);
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

				<form onSubmit={onFormSubmit}>
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
								{...inputProps}
								name="username"
								placeholder="Username"
							/>
						</div>
						<div className="form-group">
							<Label for="password">Password</Label>
							<ValidatedTextInput
								{...inputProps}
								type="password"
								name="password"
								placeholder="Password"
							/>
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
