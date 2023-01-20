import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	register: PropTypes.func.isRequired,
	trigger: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired
};

const ValidatedHiddenInput = ({ register, name, trigger, ...props }) => {
	return (
		<div>
			<input type="hidden" {...register(name)} {...props} />
		</div>
	);
};
ValidatedHiddenInput.propTypes = propTypes;
export default ValidatedHiddenInput;
