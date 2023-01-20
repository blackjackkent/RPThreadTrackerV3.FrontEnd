import * as yup from 'yup';

const validator = yup.object().shape({
	userTitle: yup
		.string()
		.required('You must enter a title for your thread.')
		.max(256, 'Your thread title is too long.'),
	characterId: yup.number().required('You must select a character for your thread.'),
	postId: yup.string().matches(/^(?:\d+)?$/, 'Post IDs can only contain numbers.'),
	partnerUrlIdentifier: yup.string().max(256, "Your partner's URL identifier is too long.")
});
export default validator;
