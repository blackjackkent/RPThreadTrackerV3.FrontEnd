// #region imports
import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
// #endregion imports

const propTypes = {
	item: PropTypes.shape({}).isRequired
};

const AsideNewsRow = (props) => {
	const { item } = props;
	return (
		<div>
			<div className="callout callout-danger m-0 py-3">
				<div>
					<a href={item.postUrl}>
						{item.postTitle}
					</a>
				</div>
				<small className="mr-3">
					<Moment format="MMMM D, YYYY">
						{item.postDate}
					</Moment>
				</small>
				<Badge data-spec="news-item-badge" color="danger" className={item.isUnread ? 'float-right' : 'd-none'}> New</Badge>
			</div>
			<hr className="mx-3 my-0" />
		</div>
	);
};

AsideNewsRow.propTypes = propTypes;
export default AsideNewsRow;
