import React from 'react';
import PropTypes from 'prop-types';
import ThreadTableTagDisplay from './ThreadTableTagDisplay';

const propTypes = {
	threadData: PropTypes.shape({}).isRequired,
	toggleThreadIsArchived: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	toggleThreadIsMarkedQueued: PropTypes.func.isRequired,
	isArchive: PropTypes.bool.isRequired,
	isQueue: PropTypes.bool.isRequired
};

const ThreadTable = (props) => {
	const {
		threadData, toggleThreadIsArchived, openUntrackThreadModal, isArchive, toggleThreadIsMarkedQueued, isQueue
	} = props;
	return (
		<div className="thread-table-sub-component">
			<ThreadTableTagDisplay tags={threadData.thread.threadTags} />
			<span className="control-button">
				{isArchive && threadData.thread.postId &&
					<a className="btn btn-primary" href={threadData.thread.threadHomeUrl} target="_blank">
						View <i className="fas fa-external-link-alt" />
					</a>
				}
				{!isArchive && threadData.status && threadData.status.LastPostUrl &&
					<a className="btn btn-primary" href={threadData.status.LastPostUrl} target="_blank">
						View <i className="fas fa-external-link-alt" />
					</a>
				}
			</span>
			<span className="control-button">
				<a className="btn btn-primary" href={`/thread/edit/${threadData.thread.id}`}>
					Edit <i className="fas fa-edit" />
				</a>
			</span>
			<span className="control-button">
				{!isArchive &&
					<button className="btn btn-primary" onClick={() => toggleThreadIsMarkedQueued(threadData.thread)}>
						{isQueue ? 'Unmark' : 'Mark'} Queued <i className="fas fa-clock" />
					</button>
				}
			</span>
			<span className="control-button">
				<button className="btn btn-primary" onClick={() => toggleThreadIsArchived(threadData.thread)}>
					{isArchive ? 'Unarchive' : 'Archive'}{' '}
					<i className="fas fa-archive" />
				</button>
			</span>
			<span className="control-button">
				<button
					className="btn btn-danger"
					onClick={() => openUntrackThreadModal(threadData.thread)}
				>
					Untrack <i className="fas fa-trash-alt" />
				</button>
			</span>
		</div>
	);
};

ThreadTable.propTypes = propTypes;

export default ThreadTable;
