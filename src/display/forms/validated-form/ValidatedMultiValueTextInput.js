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
	transform: PropTypes.shape({
		input: PropTypes.func.isRequired,
		output: PropTypes.func.isRequired
	}).isRequired,
	threadId: PropTypes.string,
	values: PropTypes.arrayOf(PropTypes.string),
	control: PropTypes.shape({}).isRequired
};

const ValidatedMultiValueTextInput = ({
	register,
	trigger,
	errors,
	control,
	transform,
	name,
	threadId = null,
	helpMessage = <span />,
	...props
}) => {
	return (
		<div>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => {
					if (value === undefined && threadId) {
						return null;
					}
					return (
						<MultipleValueTextInput
							values={transform.input(value)}
							name={name}
							onItemAdded={(_, newValues) => {
								onChange(transform.output(newValues));
							}}
							onItemDeleted={(_, newValues) => onChange(transform.output(newValues))}
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
