export default {
	username: {
		minLength: {
			value: 3,
			errorMessage: 'Your username must be more than 3 characters.'
		},
		maxLength: {
			value: 256,
			errorMessage: 'Your username is too long.'
		},
		required: {
			value: true,
			errorMessage: 'You must enter a username.'
		}
	},
	password: {
		required: {
			value: true,
			errorMessage: 'You must enter a password.'
		}
	}
};
