import * as yup from 'yup';

const validator = yup.object().shape({
	currentPassword: yup.string().required('You must enter your current password.'),
	newPassword: yup
		.string()
		.required('You must enter a new password.')
		.min(6, 'Your password must be longer than 6 characters.'),
	confirmNewPassword: yup
		.string()
		.required('You must confirm your password.')
		.oneOf([yup.ref('newPassword')], 'Your passwords must match.')
});
export default validator;
