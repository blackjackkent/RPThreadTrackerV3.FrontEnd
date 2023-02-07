import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
	indeterminate: PropTypes.bool.isRequired
};

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
	const defaultRef = React.useRef();
	const resolvedRef = ref || defaultRef;

	React.useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate;
	}, [resolvedRef, indeterminate]);

	return <input type="checkbox" ref={resolvedRef} {...rest} />;
});

IndeterminateCheckbox.propTypes = propTypes;

export default () => ({
	id: 'selection',
	/* eslint-disable react/prop-types */
	Header: ({ getToggleAllPageRowsSelectedProps }) => (
		<div className="icon-column">
			<IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
		</div>
	),
	Cell: ({ row: checkboxRow }) => (
		<div className="icon-column">
			<IndeterminateCheckbox {...checkboxRow.getToggleRowSelectedProps()} />
		</div>
	)
	/* eslint-enable react/prop-types */
});
