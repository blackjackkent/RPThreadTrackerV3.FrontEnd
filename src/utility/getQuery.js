import queryString from 'query-string';

const getQuery = () => {
	try {
		if (typeof (window) !== 'undefined') {
			return queryString.parse(window.location.search);
		}
		return {};
	} catch (e) {
		console.log(e);
		return null;
	}
};
export default getQuery;
