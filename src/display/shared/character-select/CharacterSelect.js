// #region imports
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import CharacterSelectItem from './CharacterSelectItem';
// #endregion imports

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
	const options = characters.map(c => <CharacterSelectItem character={c} />);
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
