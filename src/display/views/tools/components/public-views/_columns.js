import * as columns from '../../../../shared/columns';

export default [
	columns.EditButton('Edit Public View'),
	columns.DeleteButton('Delete Public View'),
	columns.PublicViewName(),
	columns.PublicViewSlug()
];
