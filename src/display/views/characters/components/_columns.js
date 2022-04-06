import * as columns from '../../../shared/table-columns';

export default (threadCounts) => [
	columns.CharacterName(),
	columns.UrlIdentifier(),
	columns.PlatformId(),
	columns.IsOnHiatus(),
	columns.ThreadCount(threadCounts),
	columns.EditButton('Edit Character'),
	columns.ToggleHiatusButton(),
	columns.DeleteButton('Untrack Character')
];
