import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

import loggedInUser from './loggedInUser';

jsf.extend('faker', function () {
	return require('faker');
});
jsf.resolve(schema).then(function (result) {
	var destructured = {
		...result,
		...loggedInUser
	};
	fs.writeFile("./api/db.json", JSON.stringify(destructured), function (err) {
		if (err) {
			return console.log(chalk.red(err));
		} else {
			console.log(chalk.green("Mock data generated."));
		}
	});
});

