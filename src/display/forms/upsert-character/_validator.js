export default {
	characterName: {
		maxLength: {
			value: 256,
			errorMessage: 'Your character\'s name is too long.'
		}
	},
	urlIdentifier: {
		pattern: {
			value: /^[A-z\d-]+$/,
			errorMessage: 'Do not enter the full URL for your character, only their shortname identifier.'
		},
		required: {
			value: true,
			errorMessage: 'You must enter a URL identifier for your character.'
		}
	}
};
