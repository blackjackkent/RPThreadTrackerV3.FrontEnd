import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBlock, Progress } from 'reactstrap';
import LoadingIndicator from '../../../../shared/LoadingIndicator';

const propTypes = {
	header: PropTypes.number.isRequired,
	icon: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	threadsLoading: PropTypes.bool.isRequired
};

const DashboardSummaryWidget = (props) => {
	const {
		header, icon, children, threadsLoading, ...attributes
	} = props;

	return (
		<Card {...attributes}>
			<CardBlock className="card-body">
				<div className="text-right mb-2">
					{threadsLoading && <LoadingIndicator className="inverse" style={{ width: 25, height: 25, float: 'left' }} />}
				</div>
				<div className="h1  text-right mb-2">
					<i className={icon} />
				</div>
				<div className="h4 mb-0">{header}</div>
				<small className=" text-uppercase font-weight-bold">{children}</small>
				<Progress className="progress-xs mt-3 mb-0" value="100" />
			</CardBlock>
		</Card>
	);
};

DashboardSummaryWidget.propTypes = propTypes;

export default DashboardSummaryWidget;
