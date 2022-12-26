import React from 'react';
import PropTypes from 'prop-types';
import ValidatedErrorMessage from './ValidatedErrorMessage';

const propTypes = {
	register: PropTypes.func.isRequired,
	errors: PropTypes.shape({}).isRequired,
	onChange: PropTypes.func,
	name: PropTypes.string.isRequired,
	helpMessage: PropTypes.element
};

const ValidatedTextInput = ({
	register,
	errors,
	name,
	onChange = () => {},
	helpMessage = '',
	...props
}) => {
	return (
		<div>
			<input
				type="text"
				className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
				{...register(name, { onChange })}
				{...props}
			/>
			<ValidatedErrorMessage error={errors[name]} />
			{helpMessage && <small className="form-text text-muted">{helpMessage}</small>}
		</div>
	);
};
ValidatedTextInput.propTypes = propTypes;
export default ValidatedTextInput;
