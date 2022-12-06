import React from 'react';

// eslint-disable-next-line react/prop-types
const TextStringFilter = ({ column: { filterValue, setFilter } }) => {
	return (
		<input
			value={filterValue || ''}
			onChange={(e) => {
				setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
			}}
			placeholder="Filter"
		/>
	);
};
export default TextStringFilter;
