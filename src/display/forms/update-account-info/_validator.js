import * as yup from 'yup';

const validator = yup.object().shape({
	userName: yup
		.string()
		.required('You must enter a username.')
		.min(3, 'Your username must be more than 3 characters.')
		.max(256, 'Your username is too long.'),
	email: yup.string().email('Please enter a valid email.').required('You must enter an email.')
});
export default validator;
