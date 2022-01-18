import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { usePagination, useSortBy, useTable } from 'react-table';
import columns from '~/infrastructure/constants/columns';

const propTypes = {
	username: PropTypes.string,
	publicViews: PropTypes.arrayOf(PropTypes.shape({})),
	isLoading: PropTypes.bool.isRequired,
	getColumns: PropTypes.func.isRequired,
	onDeletePublicViewClick: PropTypes.func.isRequired,
	onEditPublicViewClick: PropTypes.func.isRequired
};
const defaultProps = {
	username: '',
	publicViews: []
};

const PublicViewsTable = ({
	username,
	getColumns,
	publicViews,
	isLoading,
	onDeletePublicViewClick,
	onEditPublicViewClick
}) => {
	const getCellProps = (cell) => ({
		onClick: () => {
			const { column, row } = cell;
			if (cell.column.id === columns.DELETE_BUTTON.key) {
				onDeletePublicViewClick(row.original);
				return;
			}
			if (column.id === columns.EDIT_BUTTON.key) {
				onEditPublicViewClick(row.original);
			}
		}
	});
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
		state: { pageIndex, pageSize }
	} = useTable(
		{
			columns: React.useMemo(() => getColumns(username), [username, getColumns]),
			data: publicViews,
			initialState: {
				pageSize: 10,
				sortBy: React.useMemo(
					() => [
						{
							id: 'name'
						}
					],
					[]
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
					<select value={pageSize}>
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
					{headerGroups.map((headerGroup) => (
						<tr
							className="tracker-table-filters"
							{...headerGroup.getHeaderGroupProps()}
						>
							{headerGroup.headers.map((column) => (
								<th key={column.id}>
									<div>{column.canFilter ? column.render('Filter') : null}</div>
								</th>
							))}
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
											<td {...cell.getCellProps([getCellProps(cell)])}>
												{cell.render('Cell')}
											</td>
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
PublicViewsTable.propTypes = propTypes;
PublicViewsTable.defaultProps = defaultProps;
export default PublicViewsTable;
