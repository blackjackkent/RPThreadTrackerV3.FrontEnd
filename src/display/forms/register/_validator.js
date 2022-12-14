import * as yup from 'yup';

const validator = yup.object().shape({
	username: yup
		.string()
		.required('You must enter a username.')
		.min(3, 'Your username must be more than 3 characters.')
		.max(256, 'Your username is too long.'),
	email: yup.string().email('Please enter a valid email.').required('You must enter an email.'),
	password: yup
		.string()
		.required('You must enter a password.')
		.min(6, 'Your password must be longer than 6 characters.'),
	confirmPassword: yup
		.string()
		.required('You must confirm your password.')
		.oneOf([yup.ref('password')], 'Your passwords must match.')
});
export default validator;
