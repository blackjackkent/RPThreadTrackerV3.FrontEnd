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
import Landing from './display/containers/Landing';
import StaticContainer from './display/containers/StaticContainer';
import Maintenance from './display/containers/Maintenance';
import PublicContainer from './display/containers/PublicContainer';
import AddThreadFromExtensionHandler from './display/containers/AddThreadFromExtensionHandler';

const propTypes = {
	ui: PropTypes.shape({}).isRequired,
	loadSiteTheme: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui
	} = state;
	return {
		ui
	};
}

class App extends React.Component {
	componentDidMount() {
		const { loadSiteTheme } = this.props;
		loadSiteTheme();
		this.loadBodyClasses(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.loadBodyClasses(nextProps);
	}

	loadBodyClasses(props) {
		document.body.classList.toggle('light-theme', props.ui.useLightTheme);
	}

	render() {
		const { ui } = this.props;
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
					<Route
						path="/maintenance"
						name="Maintenance"
						component={Maintenance}
					/>
					{
						['/login', '/forgotpassword', '/resetpassword', '/register'].map(path => <Route key={path} path={path} component={StaticContainer} />)
					}
					<Route
						path="/public/:username/:slug"
						name="Public"
						component={PublicContainer}
					/>
					<Route
						path="/add-thread"
						name="AddThreadFromExtensionHandler"
						component={AddThreadFromExtensionHandler}
					/>
					<Route
						path="/landing"
						name="Landing"
						component={Landing}
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
