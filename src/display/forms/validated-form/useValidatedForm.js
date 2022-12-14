import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useValidatedForm = (onSubmit, validator) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(validator)
	});
	const submitHandler = (data, e) => {
		e.preventDefault();
		onSubmit(data);
	};
	const onFormSubmit = handleSubmit(submitHandler);
	return { onFormSubmit, errors, inputProps: { register, errors } };
};
export default useValidatedForm;
