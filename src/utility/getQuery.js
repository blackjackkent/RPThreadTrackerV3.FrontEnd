import queryString from 'query-string';

const getQuery = () => (typeof (window) !== 'undefined' ? queryString.parse(window.location.search) : {});
export default getQuery;
