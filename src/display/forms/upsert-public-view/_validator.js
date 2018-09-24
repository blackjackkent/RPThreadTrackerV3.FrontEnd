import { debounce } from 'lodash';
import { isValidSlug } from '../../../infrastructure/api';

export default {
	name: {
		maxLength: {
			value: 256,
			errorMessage: 'Your character\'s name is too long.'
		},
		required: {
			value: true,
			errorMessage: 'You must enter a name for your public view.'
		}
	},
	slug: {
		pattern: {
			value: /^[A-z\d-]+$/,
			errorMessage: 'Slugs can only contain letters, numbers, and dashes.'
		},
		required: {
			value: true,
			errorMessage: 'You must enter a slug for your public view.'
		},
		async: debounce((value, ctx, input, cb) => {
			const slug = value;
			const { viewId } = ctx;
			isValidSlug(slug, viewId)
				.then(() => cb(true))
				.catch(() => { console.log(cb); cb('This slug is reserved, invalid, or already in use.'); });
		}, 300)
	},
	columns: {
		required: {
			value: true,
			errorMessage: 'You must select columns for your public thread table.'
		}
	},
	sortKey: {
		required: {
			value: true,
			errorMessage: 'You must select a column to sort the table by.'
		}
	}
};
