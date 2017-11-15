import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from "react-table";
import columns from './_columns';

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
		/>
	);
};

ThreadTable.propTypes = propTypes;

export default ThreadTable;
