

import React from 'react';
import {
	Badge
} from 'reactstrap';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const propTypes = {
	item: PropTypes.shape({
		PostId: PropTypes.number,
		PostTitle: PropTypes.string.isRequired,
		lastPostDate: PropTypes.string.isRequired
	}).isRequired
};

const AsideNewsRow = (props) => {
	const { item } = props;
	return (
		<div>
			<div className="callout callout-danger m-0 py-3">
				<div>
					<a href={item.PostUrl}>
						{item.PostTitle}
					</a>
				</div>
				<small className="mr-3">
					<Moment format="MMMM D, YYYY">
						{item.PostDate}
					</Moment>
				</small>
				<Badge color="danger" className={item.isUnread ? 'float-right' : 'd-none'} > New</Badge>
			</div>
			<hr className="mx-3 my-0" />
		</div>
	);
};

AsideNewsRow.propTypes = propTypes;
export default AsideNewsRow;
