import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', function () {
	return require('faker');
});
jsf.resolve(schema).then(function (result) {
	fs.writeFile("./api/db.json", JSON.stringify(result), function (err) {
		if (err) {
			return console.log(chalk.red(err));
		} else {
			console.log(chalk.green("Mock data generated."));
		}
	});
});

