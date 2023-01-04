import React from 'react';
import PropTypes from 'prop-types';
import * as debounceFn from 'lodash/debounce';
import { Input } from 'reactstrap';
import ValidatedErrorMessage from './ValidatedErrorMessage';

const propTypes = {
	register: PropTypes.func.isRequired,
	errors: PropTypes.shape({}).isRequired,
	onChange: PropTypes.func,
	name: PropTypes.string.isRequired,
	trigger: PropTypes.func.isRequired,
	debounce: PropTypes.bool,
	helpMessage: PropTypes.element
};

const ValidatedTextAreaInput = ({
	register,
	errors,
	trigger,
	name,
	debounce = false,
	onChange = () => {},
	helpMessage = '',
	...props
}) => {
	const getHandleChangeFn = () => {
		if (debounce) {
			return debounceFn(async () => {
				await trigger(name);
				onChange();
			});
		}
		return onChange;
	};
	return (
		<div>
			<textarea
				className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
				{...register(name, { onChange: getHandleChangeFn() })}
				{...props}
			/>
			<ValidatedErrorMessage error={errors[name]} />
			{helpMessage && <small className="form-text text-muted">{helpMessage}</small>}
		</div>
	);
};
ValidatedTextAreaInput.propTypes = propTypes;
export default ValidatedTextAreaInput;
