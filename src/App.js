import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';

// Containers
import Full from './display/containers/Full';
import Login from './display/containers/Login';
import Register from './display/containers/Register';
import ForgotPasswrd from './display/containers/ForgotPassword';
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
			<BrowserRouter>
				<Route path="*" name="Maintenance" component={Maintenance} />
			</BrowserRouter>
		);
	}
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/maintenance" name="Maintenance" component={Maintenance} />
				<Route exact path="/login" name="Login Page" component={Login} />
				<Route exact path="/register" name="Register Page" component={Register} />
				<Route exact path="/forgotpassword" name="Forgot Password Page" component={ForgotPasswrd} />
				<Route path="/threads" name="Threads" component={Full} />
				<Route path="/settings" name="Settings" component={Full} />
				<Route path="/" name="Home" component={Full} />
			</Switch>
		</BrowserRouter>
	);
};
App.propTypes = propTypes;
export default connect(mapStateToProps)(App);
