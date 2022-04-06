import * as columns from '~/display/shared/table-columns';

export default (username) => [
	columns.PublicViewName(),
	columns.PublicViewSlug(username),
	columns.EditButton('Edit Public View'),
	columns.DeleteButton('Delete Public View')
];
