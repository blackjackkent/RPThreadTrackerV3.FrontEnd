import React from 'react';
import { Container, Row, Col, Card, CardBlock, Button, Input, InputGroup } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import PropTypes from 'prop-types';

import { loginValidator } from '../../infrastructure/validators';

const propTypes = {
	handleLoginSubmit: PropTypes.func.isRequired
};
const Login = (props) => {
	const { handleLoginSubmit } = props;
	return (
		<div className="app flex-row align-items-center">
			<Container>
				<Row className="justify-content-center">
					<Col md="6">
						<Card className="login-box p-4">
							<CardBlock className="card-body">
								<AvForm onValidSubmit={handleLoginSubmit}>
									<h1>Login</h1>
									<p className="text-muted">Sign in to RPThreadTracker</p>
									<AvField
										name="username"
										placeholder="Username"
										type="text"
										validate={loginValidator.username}
									/>
									<AvField
										name="password"
										placeholder="Password"
										type="password"
										validate={loginValidator.password}
									/>
									<Row>
										<Col xs="6">
											<Button color="primary" className="px-4">Login</Button>
										</Col>
										<Col xs="6" className="text-right text-muted">
											<a href="/register">Sign up</a> &bull; {' '}
											<a href="/forgotpassword">Forgot password?</a>
										</Col>
									</Row>
								</AvForm>
							</CardBlock>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
Login.propTypes = propTypes;
export default Login;
