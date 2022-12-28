import React from 'react';
import PropTypes from 'prop-types';
import * as debounceFn from 'lodash/debounce';
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

const ValidatedCheckboxInput = ({
	register,
	errors,
	trigger,
	name,
	onChange = () => {},
	...props
}) => {
	return <input type="checkbox" {...register(name, { onChange })} {...props} />;
};
ValidatedCheckboxInput.propTypes = propTypes;
export default ValidatedCheckboxInput;
