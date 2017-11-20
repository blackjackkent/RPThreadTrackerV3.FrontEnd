import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	character: PropTypes.shape({}).isRequired
};

const CharacterTableSubComponent = (props) => {
	const { character } = props;
	return (
		<div className="character-table-sub-component">
			<span className="control-button">
				<a className="btn btn-primary" href={`/manage-characters/edit/${character.id}`}>
					Edit <i className="fa fa-pencil" />
				</a>
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
