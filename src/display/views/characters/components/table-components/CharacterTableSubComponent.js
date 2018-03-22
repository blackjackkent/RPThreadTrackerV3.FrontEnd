// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import TableSubComponentButton from '../../../../shared/TableSubComponentButton';
// #endregion imports

const propTypes = {
	character: PropTypes.shape({}).isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	toggleCharacterIsOnHiatus: PropTypes.func.isRequired,
	openUntrackCharacterModal: PropTypes.func.isRequired
};

const CharacterTableSubComponent = (props) => {
	const {
		character,
		openUpsertCharacterModal,
		toggleCharacterIsOnHiatus,
		openUntrackCharacterModal
	} = props;
	const hiatusLabel = character.isOnHiatus ? 'Set Off Hiatus' : 'Set On Hiatus';
	return (
		<div className="character-table-sub-component">
			<TableSubComponentButton
				onClick={() => openUpsertCharacterModal(character)}
				label="Edit"
				iconTag="fa-edit"
			/>
			<TableSubComponentButton
				onClick={() => toggleCharacterIsOnHiatus(character)}
				label={hiatusLabel}
				iconTag="fa-power-off"
			/>
			<TableSubComponentButton
				onClick={() => openUntrackCharacterModal(character)}
				label="Untrack"
				iconTag="fa-trash-alt"
				colorTag="danger"
			/>
		</div>
	);
};

CharacterTableSubComponent.propTypes = propTypes;
export default CharacterTableSubComponent;
