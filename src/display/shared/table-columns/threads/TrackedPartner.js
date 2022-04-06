/* eslint-disable react/prop-types */
import React from 'react';
import columns from '../../../../infrastructure/constants/columns';
import TrackedPartnerFilter from '../../table-filters/TrackedPartnerFilter';

export default (partners, includeFilter) => ({
	Header: columns.TRACKED_PARTNER.name,
	accessor: columns.TRACKED_PARTNER.key,
	Cell: ({ value }) => <span>{value || ''}</span>,
	disableFilters: !includeFilter,
	Filter: TrackedPartnerFilter(partners)
});
