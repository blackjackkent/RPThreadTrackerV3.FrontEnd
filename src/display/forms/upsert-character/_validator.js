import * as yup from 'yup';

const validator = yup.object().shape({
	characterName: yup.string().max(256, "Your character's name is too long."),
	urlIdentifier: yup
		.string()
		.required('You must enter a URL identifier for your character.')
		.matches(
			/^[A-z\d-]+$/,
			'Do not enter the full URL for your character, only their shortname identifier.'
		)
});
export default validator;
