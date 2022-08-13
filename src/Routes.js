import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../scss/style.scss';
import Layout from './display/containers/Layout';
import StaticContainer from './display/containers/StaticContainer';
import Maintenance from './display/containers/Maintenance';
import Logout from './display/containers/Logout';
import PublicContainer from './display/containers/PublicContainer';
import AddThreadFromExtensionHandler from './display/containers/AddThreadFromExtensionHandler';
import { usePageViewTracker } from '~/infrastructure/hooks';

const Routes = () => {
	usePageViewTracker();

	return (
		<Switch>
			<Route path="/maintenance" name="Maintenance" component={Maintenance} />
			<Route path="/logout" name="Logout" component={Logout} />
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
	);
};
export default Routes;
