import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	character: PropTypes.shape({}).isRequired
};

const CharacterSelectItem = (props) => {
	const {
		character
	} = props;
	return (
		<option
			value={character.characterId}
			key={character.characterId}
		>
			{character.characterName ? character.characterName : character.urlIdentifier}
		</option>
	);
};

CharacterSelectItem.propTypes = propTypes;
export default CharacterSelectItem;