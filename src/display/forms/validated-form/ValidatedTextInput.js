import React from 'react';
import PropTypes from 'prop-types';
import ValidatedErrorMessage from './ValidatedErrorMessage';

const propTypes = {
	register: PropTypes.func.isRequired,
	errors: PropTypes.shape({}).isRequired,
	onChange: PropTypes.func,
	name: PropTypes.string.isRequired
};

const ValidatedTextInput = ({ register, errors, name, onChange = () => {}, ...props }) => {
	return (
		<div>
			<input
				type="text"
				className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
				{...register(name, { onChange })}
				{...props}
			/>
			<ValidatedErrorMessage error={errors[name]} />
		</div>
	);
};
ValidatedTextInput.propTypes = propTypes;
export default ValidatedTextInput;
