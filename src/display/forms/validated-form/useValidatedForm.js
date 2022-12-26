import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

const useValidatedForm = (onSubmit, validator, defaultData) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset,
		trigger
	} = useForm({
		resolver: yupResolver(validator)
	});
	useEffect(() => {
		reset(defaultData);
	}, [reset, defaultData]);
	const submitHandler = (data, e) => {
		e.preventDefault();
		onSubmit(data);
	};
	const onFormSubmit = handleSubmit(submitHandler);
	return { onFormSubmit, errors, inputProps: { register, errors, trigger }, setValue };
};
export default useValidatedForm;
