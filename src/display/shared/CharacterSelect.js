import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	selectedCharacterId: PropTypes.number,
	onSelectCharacter: PropTypes.func.isRequired,
	defaultText: PropTypes.string,
	includeNullValue: PropTypes.bool
};
const defaultProps = {
	selectedCharacterId: -1,
	defaultText: 'Select Character',
	includeNullValue: true
};

const CharacterSelect = (props) => {
	const {
		characters, selectedCharacterId, onSelectCharacter, defaultText, includeNullValue
	} = props;
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
				defaultValue={selectedCharacterId}
				onChange={e => onSelectCharacter(parseInt(e.target.value, 10))}
			>
				{includeNullValue && <option value={null}>{defaultText}</option>}
				{options}
			</Input>
		</FormGroup>
	);
};

CharacterSelect.propTypes = propTypes;
CharacterSelect.defaultProps = defaultProps;
export default CharacterSelect;
