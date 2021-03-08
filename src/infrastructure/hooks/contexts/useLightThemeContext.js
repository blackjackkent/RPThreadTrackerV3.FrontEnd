import { createContext, useContext, useState } from 'react';
import cacheKeys from '~/infrastructure/constants/cacheKeys';
import cache from '~/infrastructure/cache';

export const LightThemeContext = createContext({});
export default () => {
	const { useLightTheme, setUseLightTheme } = useContext(LightThemeContext);
	return { useLightTheme, setUseLightTheme };
};
