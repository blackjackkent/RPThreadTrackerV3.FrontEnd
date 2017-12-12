import axios from 'axios';
import ls from 'local-storage';
import promise from 'promise';
import history from './history';
import { LOGOUT } from './actions';

const whitelist = [
	'api/auth'
];

function getAccessTokenFromStorage() {
	return ls.get('rpThreadTrackerAccessToken');
}
function isPathInWhitelist(url) {
	return whitelist.some(path => url.indexOf(path) >= 0);
}
export default {
	setupInterceptors: (store) => {
		axios.interceptors.request.use((config) => {
			if (isPathInWhitelist(config.url)) {
				return config;
			}
			const accessToken = getAccessTokenFromStorage();
			if (accessToken) {
				if (config.method !== 'OPTIONS') {
					config.headers.authorization = `Bearer ${accessToken}`;
				}
			}
			return config;
		}, error => promise.reject(error));
		// Add a response interceptor
		axios.interceptors.response.use(response => response, (error) => {
			// catches if the session ended!
			if (error.response.status === 401 && !isPathInWhitelist(error.config.url)) {
				localStorage.clear();
				store.dispatch({ type: LOGOUT });
				history.push('/login');
			}
			return Promise.reject(error);
		});
	}
};
