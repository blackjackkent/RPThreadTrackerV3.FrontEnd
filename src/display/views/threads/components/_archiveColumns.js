import * as columns from '../../../shared/columns';

const getColumns = (characters, partners) => [
	columns.TagsButton(),
	columns.DeleteButton('Untrack Thread'),
	columns.EditButton('Edit Thread'),
	columns.ArchiveButton(true),
	columns.ThreadTitle(true),
	columns.Character(characters, true),
	columns.TrackedPartner(partners)
];
export default getColumns;
