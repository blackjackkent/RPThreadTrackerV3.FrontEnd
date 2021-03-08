import { createContext, useContext } from 'react';

export const CharactersContext = createContext({});
export default () => {
	const { characters, isCharactersLoading } = useContext(CharactersContext);
	return {
		characters,
		isCharactersLoading
	};
};
