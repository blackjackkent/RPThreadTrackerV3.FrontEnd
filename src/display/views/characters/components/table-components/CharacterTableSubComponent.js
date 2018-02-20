import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const propTypes = {
	character: PropTypes.shape({}).isRequired,
	openEditCharacterModal: PropTypes.func.isRequired
};

const CharacterTableSubComponent = (props) => {
	const { character, openEditCharacterModal } = props;
	return (
		<div className="character-table-sub-component">
			<span className="control-button">
				<Button color="primary" onClick={() => openEditCharacterModal(character)}>
					Edit <i className="fas fa-edit" />
				</Button>
			</span>
			<span className="control-button">
				{
					character.isOnHiatus ?
						<Button color="primary">
							Set Off Hiatus <i className="fas fa-power-off" />
						</Button>
						:
						<Button color="primary">
							Set On Hiatus <i className="fas fa-power-off" />
						</Button>
				}
			</span>
			<span className="control-button">
				<a className="btn btn-danger" href={`/manage-characters/delete/${character.id}`}>
					Delete <i className="fas fa-trash-alt" />
				</a>
			</span>
		</div>
	);
};

CharacterTableSubComponent.propTypes = propTypes;

export default CharacterTableSubComponent;
