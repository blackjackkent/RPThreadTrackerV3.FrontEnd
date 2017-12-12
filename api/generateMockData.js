import jsf from 'json-schema-faker';
import chalk from 'chalk';
import fs from 'fs';
import faker from 'faker';
import schema from './mockDataSchema';

import loggedInUser from './loggedInUser';
import loggedInUserSettings from './loggedInUserSettings';

jsf.extend('faker', () => faker);
jsf.resolve(schema).then((result) => {
	const destructured = {
		...result,
		...loggedInUser,
		...loggedInUserSettings
	};
	fs.writeFile('./api/db.json', JSON.stringify(destructured), (err) => {
		if (err) {
			return console.log(chalk.red(err));
		}
		console.log(chalk.green('Mock data generated.'));

	});
});

