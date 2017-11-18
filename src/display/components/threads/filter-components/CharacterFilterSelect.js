import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const CharacterFilterSelect = (props) => {
	const { characters, rawFilterData, setFilteredCharacterId } = props;
	const options = [];
	if (characters) {
		for (let i = 0; i < characters.length; i++) {
			options.push(
				<option value={characters[i].id} key={characters[i].id}>
					{characters[i].characterName ? characters[i].characterName : characters[i].urlIdentifier}
				</option>
			);
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
				onChange={setFilteredCharacterId}
			>
				<option value={null}>All</option>
				{options}
			</Input>
		</FormGroup>
	);
};

CharacterFilterSelect.propTypes = propTypes;

export default CharacterFilterSelect;
