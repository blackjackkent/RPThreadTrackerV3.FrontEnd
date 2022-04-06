// #region imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BreadcrumbItem from '../styled/BreadcrumbItem';
import routes from './_routes';
// #endregion imports

const propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string,
		isExact: PropTypes.bool
	}).isRequired
};

const BreadcrumbsItem = (props) => {
	const { match } = props;
	const routeName = routes[match.url];
	if (routeName) {
		return match.isExact ? (
			<BreadcrumbItem active>{routeName}</BreadcrumbItem>
		) : (
			<BreadcrumbItem>
				<Link href={match.url} to={match.url}>
					{routeName}
				</Link>
			</BreadcrumbItem>
		);
	}
	return null;
};
BreadcrumbsItem.propTypes = propTypes;
export default BreadcrumbsItem;
