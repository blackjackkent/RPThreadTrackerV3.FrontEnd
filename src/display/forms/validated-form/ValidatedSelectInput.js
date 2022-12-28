import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import ValidatedErrorMessage from './ValidatedErrorMessage';

const propTypes = {
	register: PropTypes.func.isRequired,
	errors: PropTypes.shape({}).isRequired,
	multiple: PropTypes.bool,
	name: PropTypes.string.isRequired,
	trigger: PropTypes.func.isRequired,
	helpMessage: PropTypes.element,
	options: PropTypes.arrayOf(PropTypes.shape({})),
	control: PropTypes.shape({}).isRequired
};

const ValidatedSelectInput = ({
	register,
	errors,
	trigger,
	control,
	name,
	helpMessage = '',
	multiple = false,
	options,
	...props
}) => {
	return (
		<div>
			{!multiple && (
				<Controller
					name={name}
					control={control}
					rules={{ required: true }}
					render={({ field: { onChange, value, ref } }) => {
						return (
							<Select
								inputRef={ref}
								className={`${errors[name] ? 'is-invalid' : ''}`}
								isMulti={multiple}
								options={options}
								value={options.find((c) => c.value === value)}
								onChange={(val) => onChange(val.value)}
								{...props}
							/>
						);
					}}
				/>
			)}
			{multiple && (
				<Controller
					name={name}
					defaultValue={[]}
					control={control}
					render={({ field: { onChange, value, ref } }) => {
						return (
							<Select
								className={`${errors[name] ? 'is-invalid' : ''}`}
								inputRef={ref}
								value={options.filter((c) => value.includes(c.value))}
								onChange={(val) => onChange(val.map((c) => c.value))}
								options={options}
								isMulti
								{...props}
							/>
						);
					}}
				/>
			)}
			<ValidatedErrorMessage error={errors[name]} />
			{helpMessage && <small className="form-text text-muted">{helpMessage}</small>}
		</div>
	);
};
ValidatedSelectInput.propTypes = propTypes;
export default ValidatedSelectInput;
