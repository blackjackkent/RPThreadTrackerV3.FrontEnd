import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import columns from './_columns';
import CharacterTableSubComponent from './table-components/CharacterTableSubComponent';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openEditCharacterModal: PropTypes.func.isRequired
};

const CurrentCharacterTable = (props) => {
	const {
		characters,
		openEditCharacterModal
	} = props;
	return (
		<div className="current-characters-table">
			<ReactTable
				className="-striped"
				data={characters}
				columns={columns}
				defaultSorted={[
					{
						id: 'characterName',
						desc: true
					}
				]}
				pageSize={5}
				SubComponent={
					row => (
						<CharacterTableSubComponent
							character={row.original}
							openEditCharacterModal={openEditCharacterModal}
						/>
					)
				}
			/>
		</div>
	);
};
CurrentCharacterTable.propTypes = propTypes;
export default CurrentCharacterTable;
