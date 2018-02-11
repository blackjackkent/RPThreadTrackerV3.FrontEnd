import React from 'react';
import PropTypes from 'prop-types';
import ThreadTableTagDisplay from './ThreadTableTagDisplay';

const propTypes = {
	threadData: PropTypes.shape({}).isRequired
};

const ThreadTable = (props) => {
	const { threadData } = props;
	return (
		<div className="thread-table-sub-component">
			<ThreadTableTagDisplay tags={threadData.thread.threadTags} />
			<span className="control-button">
				<a className="btn btn-primary" href={threadData.status ? threadData.status.LastPostUrl : ''} target="_blank">
					View <i className="fa fa-external-link" />
				</a>
			</span>
			<span className="control-button">
				<a className="btn btn-primary" href={`/thread/edit/${threadData.thread.id}`}>
					Edit <i className="fa fa-pencil" />
				</a>
			</span>
			<span className="control-button" />
			<span className="control-button">
				<a className="btn btn-primary" href={`/thread/archive/${threadData.thread.id}`}>
					Archive <i className="fa fa-archive" />
				</a>
			</span>
			<span className="control-button">
				<a className="btn btn-danger" href={`/thread/archive/${threadData.thread.id}`}>Delete <i className="fa fa-archive" /></a>
			</span>
		</div>
	);
};

ThreadTable.propTypes = propTypes;

export default ThreadTable;
