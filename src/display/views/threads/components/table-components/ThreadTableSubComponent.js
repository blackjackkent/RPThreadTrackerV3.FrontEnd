import React from 'react';
import PropTypes from 'prop-types';
import ThreadTableTagDisplay from './ThreadTableTagDisplay';

const propTypes = {
	threadData: PropTypes.shape({}).isRequired,
	toggleThreadIsArchived: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	isArchive: PropTypes.bool.isRequired
};

const ThreadTable = (props) => {
	const {
		threadData, toggleThreadIsArchived, openUntrackThreadModal, isArchive
	} = props;
	return (
		<div className="thread-table-sub-component">
			<ThreadTableTagDisplay tags={threadData.thread.threadTags} />
			<span className="control-button">
				{isArchive && threadData.thread.postId &&
					<a className="btn btn-primary" href={threadData.thread.threadHomeUrl} target="_blank">
						View <i className="fa fa-external-link" />
					</a>
				}
				{!isArchive && threadData.status && threadData.status.LastPostUrl &&
					<a className="btn btn-primary" href={threadData.status.LastPostUrl} target="_blank">
						View <i className="fa fa-external-link" />
					</a>
				}
			</span>
			<span className="control-button">
				<a className="btn btn-primary" href={`/thread/edit/${threadData.thread.id}`}>
					Edit <i className="fa fa-pencil" />
				</a>
			</span>
			<span className="control-button" />
			<span className="control-button">
				<button className="btn btn-primary" onClick={() => toggleThreadIsArchived(threadData.thread)}>
					{isArchive ? 'Unarchive' : 'Archive'}{' '}
					<i className="fa fa-archive" />
				</button>
			</span>
			<span className="control-button">
				<button
					className="btn btn-danger"
					onClick={() => openUntrackThreadModal(threadData)}
				>
					Untrack <i className="fa fa-trash" />
				</button>
			</span>
		</div>
	);
};

ThreadTable.propTypes = propTypes;

export default ThreadTable;
