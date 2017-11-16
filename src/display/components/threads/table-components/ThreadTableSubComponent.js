import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from "react-table";
import ThreadTableTagDisplay from './ThreadTableTagDisplay';

const propTypes = {
	thread: PropTypes.shape({}).isRequired
};

const ThreadTable = (props) => {
	const { thread } = props;
	return (
		<div className="thread-table-sub-component">
			<ThreadTableTagDisplay tags={thread.tags} />
			<span className="control-button">
				<a className="btn btn-primary" href={thread.lastPostUrl} target="_blank">View <i className="fa fa-external-link" /></a>
			</span>
			<span className="control-button">
				<a className="btn btn-primary" href={`/thread/edit/${thread.id}`}>Edit <i className="fa fa-pencil" /></a>
			</span>
			<span className="control-button">
				<a className="btn btn-primary" href={`/thread/archive/${thread.id}`}>Archive <i className="fa fa-archive" /></a>
			</span>
			<span className="control-button">
				<a className="btn btn-danger" href={`/thread/archive/${thread.id}`}>Delete <i className="fa fa-archive" /></a>
			</span>
		</div>
	);
};

ThreadTable.propTypes = propTypes;

export default ThreadTable;
