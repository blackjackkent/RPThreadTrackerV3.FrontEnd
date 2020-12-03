import * as columns from '~/display/shared/columns';

export default (username) => [
	columns.EditButton('Edit Public View'),
	columns.DeleteButton('Delete Public View'),
	columns.PublicViewName(),
	columns.PublicViewSlug(username)
];
