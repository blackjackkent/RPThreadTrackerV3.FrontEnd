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
	email: {
		email: {
			value: true,
			errorMessage: 'Please enter a valid email.'
		},
		required: {
			value: true,
			errorMessage: 'You must enter an email.'
		}
	},
	password: {
		required: {
			value: true,
			errorMessage: 'You must enter a password.'
		},
		minLength: {
			value: 6,
			errorMessage: 'Your password must be longer than 6 characters.'
		}
	},
	confirmPassword: {
		required: {
			value: true,
			errorMessage: 'You must confirm your password.'
		},
		match: {
			value: 'password',
			errorMessage: 'Your passwords must match.'
		}
	}
};
