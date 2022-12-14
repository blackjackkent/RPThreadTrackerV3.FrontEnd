import * as yup from 'yup';

const validator = yup.object().shape({
	username: yup
		.string()
		.required('You must enter a username.')
		.min(3, 'Your username must be more than 3 characters.')
		.max(256, 'Your username is too long.'),
	password: yup.string().required('You must enter a password.')
});
export default validator;
