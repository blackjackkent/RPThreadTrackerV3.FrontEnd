import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from "react-table";

const propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

const ThreadTable = (props) => {
	const { tags } = props;
	var rows = [];
	if (tags) {
		for (var i = 0; i < tags.length; i++) {
			rows.push(<span className="tag-display-wrapper" key={i}>#{tags[i]}</span>);
		}
	}
	return (
		<div className="thread-table-tag-display">
			{rows}
		</div>
	);
};

ThreadTable.propTypes = propTypes;

export default ThreadTable;
