import debounce from 'lodash/debounce';
import { isValidSlug } from '../../../infrastructure/api';
import * as yup from 'yup';

const validator = yup.object().shape({
	name: yup
		.string()
		.required('You must enter a name for your public view.')
		.max(256, "Your public view's name is too long."),
	slug: yup
		.string()
		.required('You must enter a slug for your public view.')
		.matches(/^[A-z\d-]+$/, 'Slugs can only contain letters, numbers, and dashes.')
		.test(
			'is-unique',
			'This slug is reserved, invalid, or already in use.',
			async (value, context) => {
				const slug = value;
				const { id } = context.parent;
				try {
					await isValidSlug(slug, id);
					return true;
				} catch (e) {
					context.createError({ path: 'slug' });
					return false;
				}
			}
		),
	columns: yup
		.array()
		.of(yup.string())
		.min(1, 'You must select columns for your public thread table.'),
	sortKey: yup.string().required('You must select a column to sort the table by.'),
	sortDescending: yup.bool().required('You must select a default sort direction for your table.')
});
export default validator;
