import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	character: PropTypes.shape({
		characterId: PropTypes.string,
		urlIdentifier: PropTypes.string,
		characterName: PropTypes.string
	}).isRequired
};

const CharacterSelectItem = (props) => {
	const { character } = props;
	return (
		<option value={character.characterId} key={character.characterId}>
			{character.urlIdentifier}
			{character.characterName && ` (${character.characterName})`}
		</option>
	);
};

CharacterSelectItem.propTypes = propTypes;
export default CharacterSelectItem;
