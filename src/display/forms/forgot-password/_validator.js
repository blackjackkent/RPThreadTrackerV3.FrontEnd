import * as yup from 'yup';

const validator = yup.object().shape({
	email: yup.string().required('You must enter an email.').email('Please enter a valid email.')
});
export default validator;
