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
export default {
	setupInterceptors: (store) => {
		axios.interceptors.request.use((config) => {
			if (whitelist.some(path => config.url.indexOf(path) >= 0)) {
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
			if (error.response.status === 401) {
				localStorage.clear();
				store.dispatch({ type: LOGOUT });
				history.push('/login');
			}
			return Promise.reject(error);
		});
	}
};
