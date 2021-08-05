import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	indeterminate: PropTypes.bool.isRequired
};

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
	const defaultRef = React.useRef();
	const resolvedRef = ref || defaultRef;

	React.useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate;
	}, [resolvedRef, indeterminate]);

	return (
		<>
			<input type="checkbox" ref={resolvedRef} {...rest} />
		</>
	);
});
IndeterminateCheckbox.propTypes = propTypes;
export default IndeterminateCheckbox;
