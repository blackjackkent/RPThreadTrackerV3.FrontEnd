import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const propTypes = {
	character: PropTypes.shape({}).isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	toggleCharacterIsOnHiatus: PropTypes.func.isRequired,
	openUntrackCharacterModal: PropTypes.func.isRequired
};

const CharacterTableSubComponent = (props) => {
	const { character, openUpsertCharacterModal, toggleCharacterIsOnHiatus, openUntrackCharacterModal } = props;
	return (
		<div className="character-table-sub-component">
			<span className="control-button">
				<Button color="primary" onClick={() => openUpsertCharacterModal(character)}>
					Edit <i className="fas fa-edit" />
				</Button>
			</span>
			<span className="control-button">
				{
					character.isOnHiatus ?
						<Button color="primary" onClick={() => toggleCharacterIsOnHiatus(character)}>
							Set Off Hiatus <i className="fas fa-power-off" />
						</Button>
						:
						<Button color="primary" onClick={() => toggleCharacterIsOnHiatus(character)}>
							Set On Hiatus <i className="fas fa-power-off" />
						</Button>
				}
			</span>
			<span className="control-button">
				<button
					className="btn btn-danger"
					onClick={() => openUntrackCharacterModal(character)}
				>
					Untrack <i className="fas fa-trash-alt" />
				</button>
			</span>
		</div>
	);
};

CharacterTableSubComponent.propTypes = propTypes;

export default CharacterTableSubComponent;
