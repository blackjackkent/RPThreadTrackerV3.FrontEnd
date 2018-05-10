import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

const propTypes = {
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
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

class PublicThreadTable extends React.Component {
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
PublicThreadTable.propTypes = propTypes;
export default PublicThreadTable;
