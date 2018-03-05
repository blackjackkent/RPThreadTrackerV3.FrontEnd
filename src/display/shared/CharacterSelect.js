import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
import PropTypes from 'prop-types';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	selectedCharacterId: PropTypes.shape({}),
	onSelectCharacter: PropTypes.func.isRequired,
	defaultText: PropTypes.string,
	validator: PropTypes.shape({}),
	helpMessage: PropTypes.string
};
const defaultProps = {
	selectedCharacterId: null,
	defaultText: 'Select Character',
	validator: null,
	helpMessage: ''
};

class CharacterSelect extends React.Component {
	componentWillReceiveProps(nextProps) {
		console.log(nextProps === this.props);
	}
	render() {
		const {
		characters, selectedCharacterId, onSelectCharacter, defaultText, validator, helpMessage
	} = this.props;
		const options = [];
		if (characters) {
			for (let i = 0; i < characters.length; i++) {
				const element = (
					<option
						value={characters[i].characterId}
						key={Math.random() + characters[i].characterId}
					>
						{characters[i].characterName ? characters[i].characterName : characters[i].urlIdentifier}
					</option>
				);
				options.push(element);
			}
		}
		return (
			<div>
				{validator &&
					<AvField
						type="select"
						name="characterId"
						id="character-id"
						label="Character"
						value={selectedCharacterId}
						onChange={e => onSelectCharacter(parseInt(e.target.value, 10))}
						validate={validator}
						helpMessage={helpMessage}
					>
						{options}
					</AvField>
				}
				{!validator &&
					(
						<div>
							<Label htmlFor="characterId">Character</Label>
							<Input
								type="select"
								name="characterId"
								id="character-id"
								value={selectedCharacterId}
								onChange={e => onSelectCharacter(parseInt(e.target.value, 10))}
							>
								<option value={null}>{defaultText}</option>
								{options}
							</Input>
						</div>
					)
				}
			</div>
		);
	};
}

CharacterSelect.propTypes = propTypes;
CharacterSelect.defaultProps = defaultProps;
export default CharacterSelect;
