import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, CardBody, Button, Label } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import validator from '../_loginFormValidator';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import Card from '~/display/shared/styled/Card';

const propTypes = {
	isLoading: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

const LoginForm = ({ isLoading, errorMessage, onInputChange, onSubmit }) => {
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
				<AvForm data-spec="login-form-container" onValidSubmit={onSubmit}>
					<h1>Login</h1>
					<p className="text-muted">Sign in to RPThreadTracker</p>
					{errorMessage && (
						<div className="has-danger">
							<p data-spec="login-server-error" className="form-control-feedback">
								{errorMessage}
							</p>
						</div>
					)}
					<div>
						<div data-spec="username-field">
							<Label for="username">Username</Label>
							<AvField
								name="username"
								placeholder="Username"
								type="text"
								onChange={onInputChange}
								validate={validator.username}
							/>
						</div>
						<div data-spec="password-field">
							<Label for="password">Password</Label>
							<AvField
								name="password"
								placeholder="Password"
								type="password"
								onChange={onInputChange}
								validate={validator.password}
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
				</AvForm>
			</CardBody>
		</Card>
	);
};

LoginForm.propTypes = propTypes;
export default LoginForm;
