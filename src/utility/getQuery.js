import queryString from 'query-string';

const getQuery = () => {
	if (typeof (window) !== 'undefined') {
		return queryString.parse(window.location.search);
	}
	return {};
};
export default getQuery;
