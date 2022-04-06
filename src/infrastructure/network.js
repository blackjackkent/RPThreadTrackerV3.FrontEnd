import axios from 'axios';
import promise from 'promise';
import cache from './cache';
import cacheKeys from './constants/cacheKeys';
import { navigation } from '~/utility/history';

const whitelist = ['api/auth', `${TUMBLR_CLIENT_BASE_URL}`];
let refreshSubscribers = [];
let isRefreshing = false;

function isPathInWhitelist(url) {
	return whitelist.some((path) => url.indexOf(path) >= 0);
}
function subscribeTokenRefresh(cb) {
	refreshSubscribers.push(cb);
}
function onTokenRefreshed(token) {
	refreshSubscribers.map((cb) => cb(token));
	refreshSubscribers = [];
}
function refreshAccessToken(error) {
	return axios
		.post(`${API_BASE_URL}api/auth/refresh`, {
			RefreshToken: cache.get(cacheKeys.REFRESH_TOKEN)
		})
		.then(({ data }) => {
			cache.set(cacheKeys.ACCESS_TOKEN, data.token.token);
			cache.set(cacheKeys.REFRESH_TOKEN, data.refreshToken.token);
		})
		.catch(() => {
			throw error;
		});
}
function setAuthHeader(config) {
	if (isPathInWhitelist(config.url)) {
		return config;
	}
	const accessToken = cache.get(cacheKeys.ACCESS_TOKEN);
	if (accessToken) {
		if (config.method !== 'OPTIONS') {
			// eslint-disable-next-line no-param-reassign
			config.headers.authorization = `Bearer ${accessToken}`;
		}
	}
	return config;
}
function handleUnauthorizedRequest(error, originalRequest) {
	// start token refresh if it isn't already in process
	if (!isRefreshing) {
		isRefreshing = true;
		refreshAccessToken(error).then(() => {
			isRefreshing = false;
			onTokenRefreshed();
		});
	}

	// add request to list to be re-executed when token refresh is complete
	const retryOrigReq = new Promise((resolve) => {
		subscribeTokenRefresh(() => {
			const token = cache.get(cacheKeys.ACCESS_TOKEN);
			const newRequest = {
				headers: {
					authorization: `Bearer ${token}`
				},
				...originalRequest
			};
			resolve(axios(newRequest));
		});
	});
	return retryOrigReq;
}

export default {
	setupInterceptors: () => {
		axios.interceptors.request.use(setAuthHeader, (error) => promise.reject(error));
		axios.interceptors.response.use(
			(response) => response,
			(error) => {
				const { config } = error;
				if (error.response.status === 498) {
					navigation.navigateTo('/logout');
					return Promise.resolve(error);
				}
				if (error.response.status === 503) {
					navigation.navigateTo('/maintenance');
					return Promise.reject(error);
				}
				if (error.response.status === 401 && !isPathInWhitelist(error.config.url)) {
					return handleUnauthorizedRequest(error, config);
				}
				return Promise.reject(error);
			}
		);
	}
};
