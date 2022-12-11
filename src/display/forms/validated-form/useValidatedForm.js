import { useForm } from 'react-hook-form';
import { useFormReducer } from '~/infrastructure/hooks';

const useValidatedForm = (onSubmit) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	// const [formState, onInputChange] = useFormReducer();
	const submitHandler = (data, e) => {
		e.preventDefault();
		onSubmit(data);
	};
	const onFormSubmit = () => handleSubmit(submitHandler);
	return { onFormSubmit, errors, inputProps: { register, errors } };
};
export default useValidatedForm;
