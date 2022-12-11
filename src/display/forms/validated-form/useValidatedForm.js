import { useForm } from 'react-hook-form';

const useValidatedForm = (onSubmit, validator) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const submitHandler = (data, e) => {
		e.preventDefault();
		onSubmit(data);
	};
	const onFormSubmit = handleSubmit(submitHandler);
	return { onFormSubmit, errors, inputProps: { register, errors, validator } };
};
export default useValidatedForm;
