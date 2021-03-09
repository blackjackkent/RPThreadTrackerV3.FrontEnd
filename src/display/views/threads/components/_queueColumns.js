import * as columns from '../../../shared/thread-table-columns';

const getColumns = (characters, partners, lastPosters) => [
	columns.TagsButton(),
	columns.DeleteButton('Untrack Thread'),
	columns.EditButton('Edit Thread'),
	columns.ArchiveButton(),
	columns.QueueButton(true),
	columns.ThreadTitle(true),
	columns.Character(characters, true),
	columns.LastPoster(lastPosters, true),
	columns.LastPostDate(),
	columns.DateQueued(),
	columns.TrackedPartner(partners, true)
];
export default getColumns;
