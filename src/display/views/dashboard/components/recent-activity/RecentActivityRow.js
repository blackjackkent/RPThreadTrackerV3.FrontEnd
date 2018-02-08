import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Moment from 'react-moment';

const propTypes = {
	threadData: PropTypes.shape({}).isRequired
};

const RecentActivityRow = (props) => {
	const { threadData } = props;
	return (
		<Row>
			<Col xs="12" sm="6">
				<div><a href={threadData.status.lastPostUrl}>{threadData.thread.userTitle}</a></div>
				<div className="small ">
					Last Post by{' '}
					<a href={threadData.status.lastPostUrl}>{threadData.status.lastPosterUrlIdentifier}</a>
				</div>
			</Col>
			<Col sm="6" xs="12" className="text-right">
				<div>
					<Moment format="MMMM D, YYYY">
						{threadData.status.lastPostDate}
					</Moment>
				</div>
				<div className="small">
					<a href="/untrack">Untrack</a> &bull;{' '}
					<a href="/archive">Archive</a> &bull;{' '}
					<a href="/queue">Mark Queued</a>
				</div>
			</Col>
		</Row>
	);
};

RecentActivityRow.propTypes = propTypes;
export default RecentActivityRow;
