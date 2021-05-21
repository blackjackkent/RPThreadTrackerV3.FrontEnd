import React from 'react';

function TrackedPartnerFilter(trackedPartners) {
	// eslint-disable-next-line react/prop-types
	return ({ column: { filterValue, setFilter } }) => {
		return (
			<select
				onChange={(event) => setFilter(event.target.value || undefined)}
				style={{
					width: '100%'
				}}
				value={filterValue}
			>
				<option value="">Show All</option>
				{trackedPartners.sort().map((p) => (
					<option key={p} value={p}>
						{p}
					</option>
				))}
			</select>
		);
	};
}
export default TrackedPartnerFilter;
