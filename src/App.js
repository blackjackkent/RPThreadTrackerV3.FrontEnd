import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import 'simple-line-icons/css/simple-line-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-tooltip/assets/bootstrap.css';
import { ToastContainer } from 'react-toastify';

import '../scss/style.scss';
import history from './utility/history';
import { useCacheValue, LightThemeContext } from './infrastructure/hooks';
import cacheKeys from './infrastructure/constants/cacheKeys';
import Routes from './Routes';

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
			<ToastContainer />
			<Router history={history}>
				<Routes />
			</Router>
		</LightThemeContext.Provider>
	);
};
export default App;
