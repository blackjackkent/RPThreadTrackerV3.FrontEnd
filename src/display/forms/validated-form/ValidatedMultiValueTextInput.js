import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import MultipleValueTextInput from 'react-multivalue-text-input/build/components/MultipleValueTextInput';
import ValidatedErrorMessage from './ValidatedErrorMessage';

const propTypes = {
	register: PropTypes.func,
	trigger: PropTypes.func,
	errors: PropTypes.shape({}).isRequired,
	name: PropTypes.string.isRequired,
	helpMessage: PropTypes.element,
	values: PropTypes.arrayOf(PropTypes.string),
	control: PropTypes.shape({}).isRequired
};

const ValidatedMultiValueTextInput = ({
	register,
	trigger,
	errors,
	control,
	name,
	helpMessage = <span />,
	values,
	...props
}) => {
	return (
		<div>
			<Controller
				name={name}
				control={control}
				defaultValue={values}
				render={({ field: { onChange, value } }) => {
					return (
						<MultipleValueTextInput
							values={value}
							name={name}
							onItemAdded={(_, newValues) => onChange(newValues)}
							onItemDeleted={(_, newValues) => onChange(newValues)}
							shouldAddOnBlur
							{...props}
						/>
					);
				}}
			/>
			<ValidatedErrorMessage error={errors[name]} />
			{helpMessage && <small className="form-text text-muted">{helpMessage}</small>}
		</div>
	);
};
ValidatedMultiValueTextInput.propTypes = propTypes;
export default ValidatedMultiValueTextInput;
