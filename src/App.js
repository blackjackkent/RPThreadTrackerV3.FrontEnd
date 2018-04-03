import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'simple-line-icons/css/simple-line-icons.css';
import 'react-redux-toastr/src/styles/index.scss';
import 'rc-tooltip/assets/bootstrap.css';

import '../scss/style.scss';
import history from './infrastructure/history';
import Layout from './display/containers/Layout';
import StaticContainer from './display/containers/StaticContainer';
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
				{
					['/login', '/forgotpassword', '/resetpassword', '/register'].map(path => <Route key={path} path={path} component={StaticContainer} />)
				}
				<Route component={Layout} />
			</Switch>
		</Router>
	);
};
App.propTypes = propTypes;
export default connect(mapStateToProps)(App);
