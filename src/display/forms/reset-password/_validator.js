export default {
	newPassword: {
		required: {
			value: true,
			errorMessage: 'You must enter a password.'
		},
		minLength: {
			value: 6,
			errorMessage: 'Your password must be longer than 6 characters.'
		}
	},
	confirmNewPassword: {
		required: {
			value: true,
			errorMessage: 'You must confirm your password.'
		},
		match: {
			value: 'newPassword',
			errorMessage: 'Your passwords must match.'
		}
	}
};
