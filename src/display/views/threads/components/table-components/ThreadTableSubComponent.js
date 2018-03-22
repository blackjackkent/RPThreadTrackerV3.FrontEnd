import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThreadTableTagDisplay from './ThreadTableTagDisplay';
import TableSubComponentButton from '../../../../shared/TableSubComponentButton';

const propTypes = {
	threadData: PropTypes.shape({}).isRequired,
	toggleThreadIsArchived: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	openEditThreadModal: PropTypes.func.isRequired,
	toggleThreadIsMarkedQueued: PropTypes.func.isRequired,
	isArchive: PropTypes.bool.isRequired,
	isQueue: PropTypes.bool.isRequired
};

class ThreadTable extends Component {
	getPostUrl() {
		const { isArchive, threadData } = this.props;
		let postUrl = '';
		if (isArchive && threadData.thread.postId) {
			postUrl = threadData.thread.threadHomeUrl;
		}
		if (!isArchive && threadData.status && threadData.status.LastPostUrl) {
			postUrl = threadData.status.LastPostUrl;
		}
		return postUrl;
	}
	render() {
		const {
			threadData,
			toggleThreadIsArchived,
			openUntrackThreadModal,
			openEditThreadModal,
			isArchive,
			toggleThreadIsMarkedQueued,
			isQueue
		} = this.props;
		const postUrl = this.getPostUrl();

		return (
			<div className="thread-table-sub-component">
				<ThreadTableTagDisplay tags={threadData.thread.threadTags} />
				{
					postUrl && <TableSubComponentButton
						onClick={() => window.open(postUrl)}
						iconTag="fa-external-link-alt"
						label="View"
					/>
				}
				<TableSubComponentButton
					onClick={() => openEditThreadModal(threadData.thread)}
					iconTag="fa-edit"
					label="Edit"
				/>
				{
					!isArchive && <TableSubComponentButton
						onClick={() => toggleThreadIsMarkedQueued(threadData.thread)}
						iconTag="fa-clock"
						label={`${isQueue ? 'Unmark' : 'Mark'} Queued`}
					/>
				}
				<TableSubComponentButton
					onClick={() => toggleThreadIsArchived(threadData.thread)}
					iconTag="fa-archive"
					label={`${isArchive ? 'Unarchive' : 'Archive'}`}
				/>
				<TableSubComponentButton
					colorTag="danger"
					onClick={() => openUntrackThreadModal(threadData.thread)}
					iconTag="fa-trash-alt"
					label="Untrack"
				/>
			</div>
		);
	}
}
ThreadTable.propTypes = propTypes;
export default ThreadTable;
