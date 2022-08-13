import React from 'react';
import PropTypes from 'prop-types';
import { usePagination, useSortBy, useTable } from 'react-table';
import { Table } from 'reactstrap';

const propTypes = {
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})),
	view: PropTypes.shape({
		sortKey: PropTypes.string,
		sortDescending: PropTypes.bool
	}),
	isLoadingIconVisible: PropTypes.bool.isRequired
};
const defaultProps = {
	threads: [],
	view: {}
};

function formatDataForTable(threads) {
	const data = threads?.map((item) => {
		// eslint-disable-next-line no-underscore-dangle
		const _id = item.threadId;
		return {
			_id,
			...item
		};
	});
	return data;
}

const PublicThreadTable = ({ threads, columns, view }) => {
	const tableData = React.useMemo(() => formatDataForTable(threads), [threads]);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize }
	} = useTable(
		{
			columns,
			data: tableData,
			initialState: {
				pageSize: 20,
				sortBy: React.useMemo(
					() => [
						{
							id: view?.sortKey,
							desc: view?.sortDescending
						}
					],
					[view]
				)
			},
			disableSortRemove: true
		},
		useSortBy,
		usePagination
	);

	return (
		<div className="table-wrapper">
			<div className="pagination-controls">
				<div className="pagination-back">
					<button type="button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
						{'<<'}
					</button>{' '}
					<button
						type="button"
						onClick={() => previousPage()}
						disabled={!canPreviousPage}
					>
						{'<'}
					</button>{' '}
				</div>
				<div className="pagination-data">
					<span className="pagination-page-info">
						Page{' '}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>{' '}
					</span>
					<span>
						| Go to page:{' '}
						<input
							type="number"
							defaultValue={pageIndex + 1}
							onChange={(e) => {
								const newPage = e.target.value ? Number(e.target.value) - 1 : 0;
								gotoPage(newPage);
							}}
							style={{ width: '100px' }}
						/>
					</span>{' '}
					<select
						value={pageSize}
						onChange={(e) => {
							setPageSize(Number(e.target.value));
						}}
					>
						{[5, 10, 20, 25, 50, 100].map((size) => (
							<option key={size} value={size}>
								Show {size}
							</option>
						))}
					</select>
				</div>
				<div className="pagination-forward">
					<button type="button" onClick={() => nextPage()} disabled={!canNextPage}>
						{'>'}
					</button>{' '}
					<button
						type="button"
						onClick={() => gotoPage(pageCount - 1)}
						disabled={!canNextPage}
					>
						{'>>'}
					</button>{' '}
				</div>
			</div>
			<Table className="tracker-table" dark striped bordered {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr className="tracker-table-titles" {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => {
								return (
									<th
										key={column.id}
										className={
											// eslint-disable-next-line no-nested-ternary
											column.isSorted
												? column.isSortedDesc
													? 'sort-desc'
													: 'sort-asc'
												: ''
										}
									>
										<div
											{...column.getHeaderProps(
												column.getSortByToggleProps()
											)}
										>
											{column.render('Header')}
										</div>
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody className="tracker-table-body" {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<React.Fragment key={row.id}>
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
										);
									})}
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
PublicThreadTable.propTypes = propTypes;
PublicThreadTable.defaultProps = defaultProps;
export default PublicThreadTable;
