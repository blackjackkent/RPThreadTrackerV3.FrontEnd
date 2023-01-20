import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { usePageViewTracker } from '~/infrastructure/hooks';

const Layout = lazy(() => import('./display/containers/Layout'));
const StaticContainer = lazy(() => import('./display/containers/StaticContainer'));
const Maintenance = lazy(() => import('./display/containers/Maintenance'));
const Logout = lazy(() => import('./display/containers/Logout'));
const PublicContainer = lazy(() => import('./display/containers/PublicContainer'));
const AddThreadFromExtensionHandler = lazy(() =>
	import('./display/containers/AddThreadFromExtensionHandler')
);

const Routes = () => {
	usePageViewTracker();

	return (
		<Suspense fallback="">
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
		</Suspense>
	);
};
export default Routes;
