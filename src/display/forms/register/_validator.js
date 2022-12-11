export default {
	username: {
		minLength: {
			value: 3,
			message: 'Your username must be more than 3 characters.'
		},
		maxLength: {
			value: 256,
			message: 'Your username is too long.'
		},
		required: {
			value: true,
			message: 'You must enter a username.'
		}
	},
	email: {
		email: {
			value: true,
			message: 'Please enter a valid email.'
		},
		required: {
			value: true,
			message: 'You must enter an email.'
		}
	},
	password: {
		required: {
			value: true,
			message: 'You must enter a password.'
		},
		minLength: {
			value: 6,
			message: 'Your password must be longer than 6 characters.'
		}
	},
	confirmPassword: {
		required: {
			value: true,
			message: 'You must confirm your password.'
		},
		match: {
			value: 'password',
			message: 'Your passwords must match.'
		}
	}
};
