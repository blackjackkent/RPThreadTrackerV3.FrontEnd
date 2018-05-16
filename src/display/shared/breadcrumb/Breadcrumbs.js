// #region imports
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'reactstrap';
import BreadcrumbsItem from './BreadcrumbsItem';
// #endregion imports

const propTypes = {
	location: PropTypes.shape({
		location: PropTypes.shape({ pathname: PropTypes.string })
	}).isRequired
};

class Breadcrumbs extends React.Component {
	getPaths(pathname) {
		const paths = ['/'];
		if (pathname === '/') {
			return paths;
		}
		pathname.split('/').reduce((prev, curr) => {
			const currPath = `${prev}/${curr}`;
			paths.push(currPath);
			return currPath;
		});
		return paths;
	}
	render() {
		const { location: { pathname } } = this.props;
		const paths = this.getPaths(pathname);
		// eslint-disable-next-line react/no-array-index-key
		const items = paths.map((path, i) => <Route key={i} path={path} component={BreadcrumbsItem} />);
		return (<Breadcrumb>{items}</Breadcrumb>);
	}
}

Breadcrumbs.propTypes = propTypes;
export default Breadcrumbs;
