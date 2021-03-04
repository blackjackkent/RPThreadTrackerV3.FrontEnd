// #region imports
import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
// #endregion imports

const propTypes = {
	item: PropTypes.shape({
		isUnread: PropTypes.bool,
		postUrl: PropTypes.string,
		postTitle: PropTypes.string,
		postDate: PropTypes.string
	}).isRequired
};

const AsideNewsRow = (props) => {
	const { item } = props;
	return (
		<div>
			<div
				className={`callout m-0 py-3 ${
					item.isUnread ? 'callout-danger' : 'callout-secondary'
				}`}
			>
				<div>
					<a href={item.postUrl} target="_blank" rel="noopener noreferrer">
						{item.postTitle}
					</a>
				</div>
				<small className="mr-3">
					<Moment format="MMMM D, YYYY">{item.postDate}</Moment>
				</small>
				<Badge
					data-spec="news-item-badge"
					color="danger"
					className={item.isUnread ? 'float-right' : 'd-none'}
				>
					{' '}
					New
				</Badge>
			</div>
			<hr className="mx-3 my-0" />
		</div>
	);
};

AsideNewsRow.propTypes = propTypes;
export default AsideNewsRow;
