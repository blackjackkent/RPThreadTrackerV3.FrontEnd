import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from './infrastructure/history';

// Styles
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import '../scss/style.scss';

// Containers
import Layout from './display/containers/Layout';
import Login from './display/containers/Login';
import Register from './display/containers/Register';
import ForgotPassword from './display/containers/ForgotPassword';
import Maintenance from './display/containers/Maintenance';

const propTypes = {
	ui: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const {
		ui
	} = state;
	return {
		ui
	};
}

const App = (props) => {
	const { ui } = props;
	if (ui.isMaintenanceMode) {
		return (
			<Router history={history}>
				<Route path="*" name="Maintenance" component={Maintenance} />
			</Router>
		);
	}
	return (
		<Router history={history}>
			<Switch>
				<Route path="/maintenance" name="Maintenance" component={Maintenance} />
				<Route exact path="/login" name="Login" component={Login} />
				<Route exact path="/register" name="Register" component={Register} />
				<Route exact path="/forgotpassword" name="Forgot Password" component={ForgotPassword} />
				<Route path="/threads" name="Threads" component={Layout} />
				<Route path="/settings" name="Settings" component={Layout} />
				<Route path="/" name="Home" component={Layout} />
			</Switch>
		</Router>
	);
};
App.propTypes = propTypes;
export default connect(mapStateToProps)(App);
