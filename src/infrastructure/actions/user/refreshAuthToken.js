export const REFRESH_AUTH_TOKEN = 'REFRESH_AUTH_TOKEN';
export function refreshAuthToken() {
	return {
		type: REFRESH_AUTH_TOKEN
	};
}
