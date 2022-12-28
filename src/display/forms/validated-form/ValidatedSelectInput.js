import React from 'react';
import PropTypes from 'prop-types';
import ValidatedErrorMessage from './ValidatedErrorMessage';

const propTypes = {
	register: PropTypes.func.isRequired,
	errors: PropTypes.shape({}).isRequired,
	onChange: PropTypes.func,
	multiple: PropTypes.bool,
	name: PropTypes.string.isRequired,
	trigger: PropTypes.func.isRequired,
	helpMessage: PropTypes.element,
	children: PropTypes.arrayOf(PropTypes.element)
};

const ValidatedSelectInput = ({
	register,
	errors,
	trigger,
	name,
	onChange = () => {},
	helpMessage = '',
	multiple = false,
	children,
	...props
}) => {
	return (
		<div>
			<select
				className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
				{...register(name, {
					onChange
				})}
				multiple={multiple}
				{...props}
			>
				{children}
			</select>
			<ValidatedErrorMessage error={errors[name]} />
			{helpMessage && <small className="form-text text-muted">{helpMessage}</small>}
		</div>
	);
};
ValidatedSelectInput.propTypes = propTypes;
export default ValidatedSelectInput;
