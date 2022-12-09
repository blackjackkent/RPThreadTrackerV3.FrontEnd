import { useForm } from 'react-hook-form';

const useValidatedForm = (onSubmit) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const submitHandler = (data, e) => {
		e.preventDefault();
		onSubmit(data);
	};
	const onFormSubmit = () => handleSubmit(submitHandler);
	return { register, onFormSubmit, errors };
};
export default useValidatedForm;
