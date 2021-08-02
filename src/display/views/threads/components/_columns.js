import * as columns from '../../../shared/table-columns';

const getColumns = (characters, partners, lastPosters) => [
	columns.TagsButton(),
	// columns.QueueButton(),
	columns.ThreadTitle(true),
	columns.Character(characters, true),
	columns.LastPoster(lastPosters, true),
	columns.LastPostDate(),
	columns.TrackedPartner(partners, true),
	columns.EditButton('Edit Thread'),
	columns.ArchiveButton(),
	columns.DeleteButton('Untrack Thread')
];
export default getColumns;
