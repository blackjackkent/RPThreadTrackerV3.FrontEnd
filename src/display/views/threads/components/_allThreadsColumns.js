import * as columns from '../../../shared/table-columns';

const getColumns = (characters, partners, lastPosters) => [
	columns.TagsButton(),
	// columns.EditButton('Edit Thread'),
	// columns.ArchiveButton(),
	columns.ThreadTitle(true),
	columns.Character(characters, true),
	columns.LastPoster(lastPosters, true),
	columns.LastPostDate(),
	columns.TrackedPartner(partners, true),
	columns.EditButton('Edit Thread'),
	columns.DeleteButton('Untrack Thread')
];
export default getColumns;
