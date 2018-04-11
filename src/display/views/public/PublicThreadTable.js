import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isArchive: PropTypes.bool.isRequired,
	isQueue: PropTypes.bool.isRequired,
	isThreadFilterCardHidden: PropTypes.bool.isRequired,
	toggleThreadIsMarkedQueued: PropTypes.func.isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	openEditThreadModal: PropTypes.func.isRequired,
	rawFilterData: PropTypes.shape({}).isRequired,
	setFilteredCharacterId: PropTypes.func.isRequired,
	setFilteredTag: PropTypes.func.isRequired,
	tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadFilterHiddenToggle: PropTypes.func.isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	toggleThreadIsArchived: PropTypes.func.isRequired,
	bulkToggleThreadsAreMarkedQueued: PropTypes.func.isRequired,
	bulkToggleThreadsAreArchived: PropTypes.func.isRequired,
	openBulkUntrackThreadsModal: PropTypes.func.isRequired
};

function getData(threads) {
	const data = threads.map((item) => {
		// eslint-disable-next-line no-underscore-dangle
		const _id = item.thread.threadId;
		return {
			_id,
			...item
		};
	});
	return data;
}

class ThreadTable extends React.Component {
	render() {
		const {
			threads,
			columns
		} = this.props;

		return (
			<div>
				<ReactTable
					// eslint-disable-next-line no-return-assign
					className="-striped"
					data={getData(threads)}
					columns={columns}
					defaultSorted={[
						{
							id: 'status.LastPostDate',
							desc: true
						}
					]}
					showPaginationTop
					SubComponent={row =>
						(<span />)}
				/>
			</div>
		);
	}
}
ThreadTable.propTypes = propTypes;
export default ThreadTable;
