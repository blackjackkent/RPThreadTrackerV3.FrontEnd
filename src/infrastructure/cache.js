import ls from 'local-storage';

const baseKey = 'rpthreadtracker-data';

export default {
	get: (key) => {
		const data = ls.get(baseKey);
		if (data && Object.prototype.hasOwnProperty.call(data, key)) {
			return data[key];
		}
		return null;
	},

	set: (key, value) => {
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
