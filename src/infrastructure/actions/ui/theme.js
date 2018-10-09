export const LOAD_SITE_THEME = 'LOAD_SITE_THEME';
export function loadSiteTheme() {
	return {
		type: LOAD_SITE_THEME
	};
}

export const SET_SITE_THEME = 'SET_SITE_THEME';
export function setSiteTheme(data) {
	return {
		type: SET_SITE_THEME,
		data
	};
}

export const LOAD_SITE_THEME_SUCCESS = 'LOAD_SITE_THEME_SUCCESS';
export function loadSiteThemeSuccess(data) {
	return {
		type: LOAD_SITE_THEME_SUCCESS,
		data
	};
}
