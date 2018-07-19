import * as columns from '../../../shared/columns';

export default [
	columns.EditButton('Edit Character'),
	columns.ToggleHiatusButton(),
	columns.DeleteButton('Untrack Character'),
	columns.CharacterName(),
	columns.UrlIdentifier(),
	columns.PlatformId(),
	columns.IsOnHiatus()
];
