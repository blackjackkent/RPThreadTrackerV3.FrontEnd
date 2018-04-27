import axios from 'axios';
import promise from 'promise';
import cache from './cache';
import { SUBMIT_USER_LOGOUT, REFRESH_AUTH_TOKEN } from './actions';

const whitelist = [
	'api/auth'
];
const refreshSubscribers = [];
let isRefreshing = false;

function getAccessTokenFromStorage() {
	return cache.get('accessToken');
}
function getRefreshTokenFromStorage() {
	return cache.get('refreshToken');
}
function isPathInWhitelist(url) {
	return whitelist.some(path => url.indexOf(path) >= 0);
}
function subscribeTokenRefresh(cb) {
	refreshSubscribers.push(cb);
}
function onRefreshed(token) {
	refreshSubscribers.map(cb => cb(token));
}
function refreshAccessToken(error) {
	return axios
		.post(`${API_BASE_URL}/api/auth/refresh`, { RefreshToken: getRefreshTokenFromStorage() })
		.then(({ data }) => {
			const newToken = data.token.token;
			const newRefreshToken = data.refresh_token.token;
			cache.set('accessToken', newToken);
			cache.set('refreshToken', newRefreshToken);
			const config = {
				...error.config,
				params: { ...error.config.params, token: newToken }
			};
			return axios(config);
		})
		.catch(() => {
			throw error;
		});
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
			const { config } = error;
			const originalRequest = config;
			if (error.response.status === 498) {
				store.dispatch({ type: SUBMIT_USER_LOGOUT, data: getRefreshTokenFromStorage() });
				return Promise.reject(error);
			}

			if (error.response.status === 401 && !isPathInWhitelist(error.config.url)) {
				if (!isRefreshing) {
					isRefreshing = true;
					refreshAccessToken(error)
						.then((newToken) => {
							isRefreshing = false;
							onRefreshed(newToken);
						});
				}

				const retryOrigReq = new Promise((resolve) => {
					subscribeTokenRefresh((token) => {
						// replace the expired token and retry
						originalRequest.headers.Authorization = `Bearer ${token}`;
						resolve(axios(originalRequest));
					});
				});
				return retryOrigReq;
			}
			return Promise.reject(error);

		});
	}
};
