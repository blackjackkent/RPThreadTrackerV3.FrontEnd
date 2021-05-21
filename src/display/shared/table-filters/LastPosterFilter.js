import React from 'react';

function LastPosterFilter(lastPosters) {
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
				{lastPosters.sort().map((lp) => (
					<option key={lp} value={lp}>
						{lp}
					</option>
				))}
			</select>
		);
	};
}
export default LastPosterFilter;
