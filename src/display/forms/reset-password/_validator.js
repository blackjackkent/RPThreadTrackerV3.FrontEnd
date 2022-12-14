import * as yup from 'yup';

const validator = yup.object().shape({
	newPassword: yup
		.string()
		.required('You must enter a password.')
		.min(6, 'Your password must be longer than 6 characters.'),
	confirmNewPassword: yup
		.string()
		.required('You must confirm your password.')
		.oneOf([yup.ref('newPassword')], 'Your passwords must match.')
});
export default validator;
