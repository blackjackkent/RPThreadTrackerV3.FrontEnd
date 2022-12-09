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
	password: {
		required: {
			value: true,
			message: 'You must enter a password.'
		}
	}
};
