// #region imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import ReduxToastr from 'react-redux-toastr';
import Login from '../views/login/Login';
import ForgotPassword from '../views/forgot-password/ForgotPassword';
import Register from '../views/register/Register';
import ResetPassword from '../views/reset-password/ResetPassword';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';
// #endregion imports

const StaticContainer = () => (
	<div className="app flex-row align-items-center">
		<Container>
			<Row className="justify-content-center">
				<Col md="6">
					<Switch>
						<Route exact path="/login" name="Login" component={Login} />
						<Route
							exact
							path="/resetpassword"
							name="Reset Password"
							component={ResetPassword}
						/>
						<Route
							exact
							path="/forgotpassword"
							name="Forgot Password"
							component={ForgotPassword}
						/>
						<Route exact path="/register" name="Register" component={Register} />
					</Switch>
				</Col>
			</Row>
		</Container>
	</div>
);
export default withPageViewTracker(StaticContainer);
