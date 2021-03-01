import { useState } from 'react';
import cache from '~/infrastructure/cache';

export default (key) => {
	const [value, setValue] = useState(cache.get(key));
	const setKey = (newValue) => {
		setValue(newValue);
		cache.set(key, newValue);
	};
	const clearKey = () => {
		cache.clearKey(key);
		setValue(null);
	};
	return [value, setKey, clearKey];
};
