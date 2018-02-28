export default {
	userTitle: {
		maxLength: {
			value: 256,
			errorMessage: 'Your thread title is too long.'
		},
		required: {
			value: true,
			errorMessage: 'You must enter a title for your thread.'
		}
	},
	postId: {
		number: {
			value: true,
			errorMessage: 'Post IDs can only contain numbers.'
		}
	},
	partnerUrlIdentifier: {
		maxLength: {
			value: 256,
			errorMessage: 'Your partner\'s URL identifier is too long.'
		}
	}
};
