export const REFRESH_AUTH_TOKEN_SUCCESS = 'REFRESH_AUTH_TOKEN_SUCCESS';
export function refreshAuthTokenSuccess(tokenData) {
	return {
		type: REFRESH_AUTH_TOKEN_SUCCESS,
		data: tokenData
	};
}
