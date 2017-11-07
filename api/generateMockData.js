import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

import loggedInUser from './loggedInUser';
import loggedInUserSettings from './loggedInUserSettings';

jsf.extend('faker', function () {
	return require('faker');
});
jsf.resolve(schema).then(function (result) {
	var destructured = {
		...result,
		...loggedInUser,
		...loggedInUserSettings
	};
	fs.writeFile("./api/db.json", JSON.stringify(destructured), function (err) {
		if (err) {
			return console.log(chalk.red(err));
		} else {
			console.log(chalk.green("Mock data generated."));
		}
	});
});

