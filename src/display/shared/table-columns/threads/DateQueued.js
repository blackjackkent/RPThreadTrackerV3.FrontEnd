/* eslint-disable react/prop-types */
import React from 'react';
import { DateTime } from 'luxon';
import columns from '../../../../infrastructure/constants/columns';

export default () => ({
	Header: columns.DATE_QUEUED.name,
	accessor: columns.DATE_QUEUED.key,
	Cell: ({ value }) => DateTime.fromISO(value).toFormat('ff'),
	disableFilters: true
});
