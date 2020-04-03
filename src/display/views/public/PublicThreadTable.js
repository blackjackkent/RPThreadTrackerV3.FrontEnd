import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import ReactTableContainer from '../../shared/styled/ReactTableContainer';

const propTypes = {
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	view: PropTypes.shape({
		sortKey: PropTypes.string,
		sortDescending: PropTypes.bool
	}).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired
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

const PublicThreadTable = (props) => {
	const { threads, columns, view, isLoadingIconVisible } = props;
	return (
		<ReactTableContainer>
			<ReactTable
				// eslint-disable-next-line no-return-assign
				className="-striped"
				data={getData(threads)}
				defaultPageSize={20}
				columns={columns}
				defaultSorted={[
					{
						id: view.sortKey,
						desc: view.sortDescending
					}
				]}
				showPaginationTop
				noDataText={isLoadingIconVisible ? 'Loading...' : 'No Threads Found'}
			/>
		</ReactTableContainer>
	);
};
PublicThreadTable.propTypes = propTypes;
export default PublicThreadTable;
