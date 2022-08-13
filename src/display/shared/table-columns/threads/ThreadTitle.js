/* eslint-disable react/prop-types */
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';
import TextStringFilter from '../../table-filters/TextStringFilter';

export default (includeFilter) => ({
	Header: columns.THREAD_TITLE.name,
	accessor: columns.THREAD_TITLE.key,
	Cell: ({ value }) => <span title={value}>{value}</span>,
	disableFilters: !includeFilter,
	sortType: (rowA, rowB) => {
		const aTitle = rowA.values['thread.userTitle'] ?? '';
		const bTitle = rowB.values['thread.userTitle'] ?? '';
		const result = aTitle.localeCompare(bTitle, undefined, {
			sensitivity: 'accent'
		});
		return result;
	},
	Filter: TextStringFilter
});
