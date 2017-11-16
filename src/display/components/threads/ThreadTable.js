import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from "react-table";
import columns from './_columns';
import ThreadTableSubComponent from './table-components/ThreadTableSubComponent';

const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const ThreadTable = (props) => {
	const { threads } = props;
	return (
		<ReactTable className="-striped -highlight"
			data={threads}
			columns={columns}
			filterable
			defaultSorted={[
				{
					id: "lastPostDate",
					desc: true
				}
			]}
			showPaginationTop
			SubComponent={row => <ThreadTableSubComponent thread={row.original} />}
		/>
	);
};

ThreadTable.propTypes = propTypes;

export default ThreadTable;
