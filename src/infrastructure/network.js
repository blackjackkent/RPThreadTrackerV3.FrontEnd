import axios from 'axios';
import ls from 'local-storage';
import promise from 'promise';
import { SUBMIT_USER_LOGOUT } from './actions';

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
					// eslint-disable-next-line no-param-reassign
					config.headers.authorization = `Bearer ${accessToken}`;
				}
			}
			return config;
		}, error => promise.reject(error));
		// Add a response interceptor
		axios.interceptors.response.use(response => response, (error) => {
			// catches if the session ended!
			if (error.response.status === 401 && !isPathInWhitelist(error.config.url)) {
				store.dispatch({ type: SUBMIT_USER_LOGOUT });
			}
			return Promise.reject(error);
		});
	}
};
