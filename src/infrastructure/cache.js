import ls from 'local-storage';
import { getQuery } from '../utility';

const baseKey = 'rpthreadtracker-data';
const disablingWhitelist = [
	'accessToken'
];
export default {
	get: (key) => {
		if (getQuery().disableCache && !disablingWhitelist.includes(key)) {
			return null;
		}
		const data = ls.get(baseKey);
		if (data && Object.prototype.hasOwnProperty.call(data, key)) {
			return data[key];
		}
		return null;
	},

	set: (key, value) => {
		if (getQuery().disableCache && !disablingWhitelist.includes(key)) {
			return;
		}
		let data = ls.get(baseKey);
		if (!data) {
			data = {};
		}
		data[key] = value;
		ls.set(baseKey, data);
	},

	clearKey: (key) => {
		let data = ls.get(baseKey);
		if (!data) {
			data = {};
		}
		data[key] = null;
		ls.set(baseKey, data);
	},

	clear: () => {
		ls.set(baseKey, null);
	}
};
