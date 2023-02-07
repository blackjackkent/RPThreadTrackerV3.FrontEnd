import React from 'react';
import PropTypes from 'prop-types';
import { CardBody, Progress } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import Card from '../../../../shared/styled/Card';

const propTypes = {
	header: PropTypes.number.isRequired,
	href: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	isLoadingIconVisible: PropTypes.bool
};

const defaultProps = {
	isLoadingIconVisible: false
};

const DashboardSummaryWidget = (props) => {
	const { header, icon, children, isLoadingIconVisible, href } = props;
	const history = useHistory();

	return (
		<Card onClick={() => history.push(href)}>
			<CardBody className="card-body dashboard-summary-widget-card-body">
				<div className="text-right mb-2">
					{isLoadingIconVisible && (
						<LoadingIndicator
							className="inverse dashboard-summary-widget-loading-icon"
							style={{
								width: 25,
								height: 25
							}}
						/>
					)}
				</div>
				<div className="h1 float-right text-right mb-2">
					<i className={`${icon} d-sm-none d-md-block`} />
				</div>
				<div className="h4 mb-0">{header}</div>
				<small className=" text-uppercase font-weight-bold">{children}</small>
				<Progress className="progress-xs mt-3 mb-0" value="100" />
			</CardBody>
		</Card>
	);
};

DashboardSummaryWidget.propTypes = propTypes;
DashboardSummaryWidget.defaultProps = defaultProps;
export default DashboardSummaryWidget;
