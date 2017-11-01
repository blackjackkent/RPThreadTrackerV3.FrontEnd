import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import routes from '../../../infrastructure/routes';

const findRouteName = url => routes[url];

const getPaths = (pathname) => {
	const paths = ['/'];

	if (pathname === '/') return paths;

	pathname.split('/').reduce((prev, curr) => {
		const currPath = `${prev}/${curr}`;
		paths.push(currPath);
		return currPath;
	});
	return paths;
};

const BreadcrumbsItem = ({ match }) => {
	const routeName = findRouteName(match.url);
	if (routeName) {
		return (
			match.isExact ?
				(
					<BreadcrumbItem active>{routeName}</BreadcrumbItem>
				) :
				(
					<BreadcrumbItem>
						<Link href={match.url} to={match.url}>
							{routeName}
						</Link>
					</BreadcrumbItem>
				)
		);
	}
	return null;
};

BreadcrumbsItem.propTypes = {
	match: PropTypes.shape({ match: { url: '' } }).isRequired
};

const Breadcrumbs = ({ location: { pathname } }) => {
	const paths = getPaths(pathname);
	// eslint-disable-next-line react/no-array-index-key
	const items = paths.map((path, i) => <Route key={i} path={path} component={BreadcrumbsItem} />);
	return (
		<Breadcrumb>
			{items}
		</Breadcrumb>
	);
};

Breadcrumbs.propTypes = {
	location: PropTypes.shape({ location: { pathname: {} } }).isRequired
};

export default props => (
	<div>
		<Route path="/:path" component={Breadcrumbs} {...props} />
	</div>
);
