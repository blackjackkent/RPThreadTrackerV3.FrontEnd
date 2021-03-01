import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'simple-line-icons/css/simple-line-icons.css';
import 'react-redux-toastr/src/styles/index.scss';
import 'rc-tooltip/assets/bootstrap.css';

import '../scss/style.scss';
import history from './utility/history';
import * as actions from './infrastructure/actions';
import Layout from './display/containers/Layout';
import StaticContainer from './display/containers/StaticContainer';
import Maintenance from './display/containers/Maintenance';
import PublicContainer from './display/containers/PublicContainer';
import AddThreadFromExtensionHandler from './display/containers/AddThreadFromExtensionHandler';

const propTypes = {
	isMaintenanceMode: PropTypes.bool.isRequired,
	useLightTheme: PropTypes.bool.isRequired,
	loadSiteTheme: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const { ui } = state;
	return {
		useLightTheme: ui.useLightTheme,
		isMaintenanceMode: ui.isMaintenanceMode
	};
}

class App extends React.Component {
	componentDidMount() {
		const { loadSiteTheme, useLightTheme } = this.props;
		loadSiteTheme();
		this.loadBodyClasses(useLightTheme);
	}

	componentWillReceiveProps(nextProps) {
		const { useLightTheme } = nextProps;
		this.loadBodyClasses(useLightTheme);
	}

	loadBodyClasses(useLightTheme) {
		document.body.classList.toggle('light-theme', useLightTheme);
	}

	render() {
		const { isMaintenanceMode } = this.props;
		if (isMaintenanceMode) {
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
					{['/login', '/forgotpassword', '/resetpassword', '/register'].map((path) => (
						<Route key={path} path={path} component={StaticContainer} />
					))}
					{['/public/:username/:slug', '/public/:slug'].map((path) => (
						<Route key={path} path={path} component={PublicContainer} />
					))}
					<Route
						path="/add-thread"
						name="AddThreadFromExtensionHandler"
						component={AddThreadFromExtensionHandler}
					/>
					<Route component={Layout} />
				</Switch>
			</Router>
		);
	}
}
App.propTypes = propTypes;
export default connect(mapStateToProps, {
	loadSiteTheme: actions.loadSiteTheme
})(App);
