import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	register: PropTypes.func.isRequired,
	validator: PropTypes.shape({}).isRequired,
	errors: PropTypes.shape({}).isRequired,
	onChange: PropTypes.func,
	inputName: PropTypes.string.isRequired
};

const ValidatedTextInput = ({
	register,
	validator,
	errors,
	inputName,
	onChange = () => {},
	...props
}) => {
	return (
		<input
			onChange={onChange}
			className={`form-control ${errors[inputName] ? 'is-invalid' : ''}`}
			{...register(inputName, validator[inputName])}
			{...props}
		/>
	);
};
ValidatedTextInput.propTypes = propTypes;
export default ValidatedTextInput;
