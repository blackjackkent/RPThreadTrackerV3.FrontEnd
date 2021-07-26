import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import columns from './_columns';
import getTdProps from './_getTdProps';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	toggleCharacterIsOnHiatus: PropTypes.func.isRequired,
	openUntrackCharacterModal: PropTypes.func.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	threadCounts: PropTypes.shape({}).isRequired
};

const CurrentCharacterTable = (props) => {
	const {
		characters,
		isLoadingIconVisible,
		openUpsertCharacterModal,
		toggleCharacterIsOnHiatus,
		openUntrackCharacterModal,
		threadCounts
	} = props;
	return (
		<ReactTableContainer className="current-characters-table">
			<ReactTable
				data-spec="character-react-table"
				className="-striped"
				data={characters}
				columns={columns(threadCounts)}
				defaultSorted={[
					{
						id: 'characterName',
						desc: true
					}
				]}
				defaultPageSize={10}
				noDataText={isLoadingIconVisible ? 'Loading...' : 'No Characters Found'}
				getTdProps={getTdProps(
					openUntrackCharacterModal,
					openUpsertCharacterModal,
					toggleCharacterIsOnHiatus
				)}
			/>
		</ReactTableContainer>
	);
};
CurrentCharacterTable.propTypes = propTypes;
export default CurrentCharacterTable;
