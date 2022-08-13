// #region imports
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Breadcrumb from '../styled/Breadcrumb';
import BreadcrumbsItem from './BreadcrumbsItem';
// #endregion imports

const propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired
};

const Breadcrumbs = (props) => {
	const {
		location: { pathname }
	} = props;
	const getPaths = (path) => {
		const paths = ['/'];
		if (path === '/') {
			return paths;
		}
		path.split('/').reduce((prev, curr) => {
			const currPath = `${prev}/${curr}`;
			paths.push(currPath);
			return currPath;
		});
		return paths;
	};
	const paths = getPaths(pathname);
	const items = paths.map((path) => <Route key={path} path={path} component={BreadcrumbsItem} />);
	return <Breadcrumb>{items}</Breadcrumb>;
};

Breadcrumbs.propTypes = propTypes;
export default Breadcrumbs;
