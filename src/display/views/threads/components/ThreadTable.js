import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import columns from './_columns';
import ThreadFilterCard from './ThreadFilterCard';
import ThreadTableSubComponent from './table-components/ThreadTableSubComponent';

const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	isThreadFilterCardHidden: PropTypes.bool.isRequired,
	threadFilterHiddenToggle: PropTypes.func.isRequired,
	setFilteredCharacterId: PropTypes.func.isRequired,
	setFilteredTag: PropTypes.func.isRequired,
	rawFilterData: PropTypes.shape({}).isRequired
};

const ThreadTable = (props) => {
	const {
		threads,
		rawFilterData,
		characters,
		tags,
		isThreadFilterCardHidden,
		threadFilterHiddenToggle,
		setFilteredCharacterId,
		setFilteredTag
	} = props;
	return (
		<div>
			<ThreadFilterCard
				rawFilterData={rawFilterData}
				characters={characters}
				tags={tags}
				isThreadFilterCardHidden={isThreadFilterCardHidden}
				threadFilterHiddenToggle={threadFilterHiddenToggle}
				setFilteredCharacterId={setFilteredCharacterId}
				setFilteredTag={setFilteredTag}
			/>
			<ReactTable
				className="-striped"
				data={threads}
				columns={columns}
				defaultSorted={[
					{
						id: 'lastPostDate',
						desc: true
					}
				]}
				showPaginationTop
				SubComponent={row => <ThreadTableSubComponent threadData={row.original} />}
			/>
		</div>
	);
};
ThreadTable.propTypes = propTypes;
export default ThreadTable;
