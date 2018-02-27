import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	rawFilterData: PropTypes.shape({}).isRequired,
	onSelectCharacter: PropTypes.func.isRequired
};

const CharacterSelect = (props) => {
	const { characters, rawFilterData, onSelectCharacter } = props;
	const options = [];
	if (characters) {
		for (let i = 0; i < characters.length; i++) {
			const element = (
				<option
					value={characters[i].characterId}
					key={characters[i].characterId}
				>
					{characters[i].characterName ? characters[i].characterName : characters[i].urlIdentifier}
				</option>
			);
			options.push(element);
		}
	}
	return (
		<FormGroup>
			<Label htmlFor="characterId">Character</Label>
			<Input
				type="select"
				name="characterId"
				id="character-id"
				value={rawFilterData.filteredCharacterId}
				onChange={onSelectCharacter}
			>
				<option value={null}>All</option>
				{options}
			</Input>
		</FormGroup>
	);
};

CharacterSelect.propTypes = propTypes;

export default CharacterSelect;
