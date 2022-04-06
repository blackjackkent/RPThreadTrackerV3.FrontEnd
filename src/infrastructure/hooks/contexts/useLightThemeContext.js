import { createContext, useContext } from 'react';

export const LightThemeContext = createContext({});
export default () => {
	const { useLightTheme, setUseLightTheme } = useContext(LightThemeContext);
	return { useLightTheme, setUseLightTheme };
};
