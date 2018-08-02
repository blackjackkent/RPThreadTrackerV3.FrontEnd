import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'simple-line-icons/css/simple-line-icons.css';
import 'react-redux-toastr/src/styles/index.scss';
import 'rc-tooltip/assets/bootstrap.css';

import '../scss/style.scss';
import history from './utility/history';
import withPageViewTracker from './infrastructure/withPageViewTracker';
import Layout from './display/containers/Layout';
import Landing from './display/containers/Landing';
import StaticContainer from './display/containers/StaticContainer';
import Maintenance from './display/containers/Maintenance';
import PublicContainer from './display/containers/PublicContainer';
import AddThreadFromExtensionHandler from './display/containers/AddThreadFromExtensionHandler';

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
				<Route path="*" name="Maintenance" component={withPageViewTracker(Maintenance)} />
			</Router>
		);
	}
	return (
		<Router history={history}>
			<Switch>
				<Route
					path="/maintenance"
					name="Maintenance"
					component={withPageViewTracker(Maintenance)}
				/>
				{
					['/login', '/forgotpassword', '/resetpassword', '/register'].map(path => <Route key={path} path={path} component={withPageViewTracker(StaticContainer)} />)
				}
				<Route
					path="/public/:slug"
					name="Public"
					component={withPageViewTracker(PublicContainer)}
				/>
				<Route
					path="/add-thread"
					name="AddThreadFromExtensionHandler"
					component={withPageViewTracker(AddThreadFromExtensionHandler)}
				/>
				<Route
					path="/landing"
					name="Landing"
					component={withPageViewTracker(Landing)}
				/>
				<Route component={Layout} />
			</Switch>
		</Router>
	);
};
App.propTypes = propTypes;
export default connect(mapStateToProps)(App);
