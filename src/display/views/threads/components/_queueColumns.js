import * as columns from '../../../shared/table-columns';

const getColumns = (characters, partners, lastPosters) => [
	columns.TagsButton(),
	// columns.ArchiveButton(),
	// columns.QueueButton(true),
	columns.ThreadTitle(true),
	columns.Character(characters, true),
	columns.LastPoster(lastPosters, true),
	columns.LastPostDate(),
	columns.DateQueued(),
	columns.TrackedPartner(partners, true),
	columns.EditButton('Edit Thread'),
	columns.DeleteButton('Untrack Thread')
];
export default getColumns;
