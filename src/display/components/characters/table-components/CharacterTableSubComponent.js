import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const propTypes = {
	character: PropTypes.shape({}).isRequired
};

const CharacterTableSubComponent = (props) => {
	const { character, openEditCharacterModal } = props;
	return (
		<div className="character-table-sub-component">
			<span className="control-button">
				<Button color="primary" onClick={() => openEditCharacterModal(character)}>
					Edit <i className="fa fa-pencil" />
				</Button>
			</span>
			<span className="control-button">
				<a className="btn btn-danger" href={`/manage-characters/delete/${character.id}`}>
					Delete <i className="fa fa-minus-circle" />
				</a>
			</span>
		</div>
	);
};

CharacterTableSubComponent.propTypes = propTypes;

export default CharacterTableSubComponent;
