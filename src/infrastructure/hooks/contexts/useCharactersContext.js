import { createContext, useContext } from 'react';

export const CharactersContext = createContext({});
export default () => {
	const { characters, isCharactersLoading, isCharactersFetchError } = useContext(
		CharactersContext
	);
	return {
		characters,
		isCharactersLoading,
		isCharactersFetchError
	};
};
