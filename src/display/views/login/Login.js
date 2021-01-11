// #region imports
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, CardBody, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useLoginMutation } from '~/infrastructure/hooks/mutations';
import { useFormTextInputState } from '~/infrastructure/hooks';
import cache from '~/infrastructure/cache';
import cacheKeys from '~/infrastructure/constants/cacheKeys';
import { navigation } from '../../../utility/history';
import validator from './_loginFormValidator';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';
// #endregion imports

function Login() {
	const [username, handleUsernameChange] = useFormTextInputState('');
	const [password, handlePasswordChange] = useFormTextInputState('');
	const { mutate, reset, isLoading, isError, isSuccess, data, error } = useLoginMutation();

	const handleLoginSubmit = () => {
		reset();
		mutate({ username, password });
	};

	const renderLoading = () => {
		if (!isLoading) {
			return null;
		}
		return (
			<LoadingIndicator
				style={{
					width: 50,
					height: 50,
					position: 'absolute',
					top: 0,
					right: 0
				}}
			/>
		);
	};

	const renderError = () => {
		if (!isError) {
			return null;
		}
		return (
			<div className="has-danger">
				<p data-spec="login-server-error" className="form-control-feedback">
					{error.response.data}
				</p>
			</div>
		);
	};

	if (isSuccess) {
		console.log(data);
		cache.set(cacheKeys.ACCESS_TOKEN, data.data.token.token);
		cache.set(cacheKeys.REFRESH_TOKEN, data.data.refreshToken.token);
		navigation.navigateTo('/dashboard');
	}

	return (
		<Card className="login-box p-4">
			<CardBody className="card-body">
				{renderLoading()}
				<AvForm data-spec="login-form-container" onValidSubmit={handleLoginSubmit}>
					<h1>Login</h1>
					<p className="text-muted">Sign in to RPThreadTracker</p>
					{renderError()}
					<div>
						<div data-spec="username-field">
							<AvField
								name="Username"
								placeholder="Username"
								type="text"
								onChange={handleUsernameChange}
								validate={validator.username}
							/>
						</div>
						<div data-spec="password-field">
							<AvField
								name="Password"
								placeholder="Password"
								type="password"
								onChange={handlePasswordChange}
								validate={validator.password}
							/>
						</div>
					</div>
					<Row>
						<Col xs="6">
							<Button color="primary" className="px-4">
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
}
export default Login;
