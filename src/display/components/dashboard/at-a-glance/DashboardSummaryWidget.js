import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBlock, Progress } from 'reactstrap';

const propTypes = {
	header: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

const DashboardSummaryWidget = (props) => {
	const {
		header, icon, children, ...attributes
	} = props;

	return (
		<Card {...attributes}>
			<CardBlock className="card-body">
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
