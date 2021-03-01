import React, { createContext, useEffect, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'simple-line-icons/css/simple-line-icons.css';
import 'react-redux-toastr/src/styles/index.scss';
import 'rc-tooltip/assets/bootstrap.css';

import '../scss/style.scss';
import history from './utility/history';
import Layout from './display/containers/Layout';
import StaticContainer from './display/containers/StaticContainer';
import Maintenance from './display/containers/Maintenance';
import Logout from './display/containers/Logout';
import PublicContainer from './display/containers/PublicContainer';
import AddThreadFromExtensionHandler from './display/containers/AddThreadFromExtensionHandler';
import { useCacheValue, LightThemeContext } from './infrastructure/hooks';
import cacheKeys from './infrastructure/constants/cacheKeys';

const App = () => {
	const [useLightTheme, setUseLightTheme] = useCacheValue(cacheKeys.USE_LIGHT_THEME);

	const loadBodyClasses = () => {
		document.body.classList.toggle('light-theme', useLightTheme);
	};
	useEffect(() => {
		loadBodyClasses();
	}, [useLightTheme]);

	return (
		<LightThemeContext.Provider
			value={{
				useLightTheme,
				setUseLightTheme
			}}
		>
			<Router history={history}>
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
			</Router>
		</LightThemeContext.Provider>
	);
};
export default App;
