import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBlock, Progress } from 'reactstrap';
import classNames from 'classnames';

const propTypes = {
	header: PropTypes.string,
	icon: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.node,
	invert: PropTypes.bool
};

const defaultProps = {
	header: '87.500',
	icon: 'icon-people',
	color: 'info',
	children: 'Visitors',
	invert: false
};

const DashboardSummaryWidget = (props) => {
	const {
		header, icon, color, children, invert, ...attributes
	} = props;

	// demo purposes only
	const progress = { style: '', color, value: 100 };
	const card = { style: '', bgColor: '', icon };

	if (invert) {
		progress.style = 'progress-white';
		progress.color = '';
		card.style = 'text-white';
		card.bgColor = `bg-${color}`;
	}
	progress.style = classNames('progress-xs mt-3 mb-0', progress.style);

	return (
		<Card {...attributes}>
			<CardBlock className="card-body">
				<div className="h1  text-right mb-2">
					<i className={card.icon} />
				</div>
				<div className="h4 mb-0">{header}</div>
				<small className=" text-uppercase font-weight-bold">{children}</small>
				<Progress className={progress.style} color="#95C6FF" value={progress.value} />
			</CardBlock>
		</Card>
	);
};

DashboardSummaryWidget.propTypes = propTypes;
DashboardSummaryWidget.defaultProps = defaultProps;

export default DashboardSummaryWidget;
