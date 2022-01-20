import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Style from '~/display/shared/styled/TrackerTable';
import PublicViewsTable from './PublicViewsTable';
import getColumns from './_columns';

const propTypes = {
	publicViews: PropTypes.arrayOf(PropTypes.shape({})),
	isLoading: PropTypes.bool.isRequired,
	setActedView: PropTypes.func.isRequired,
	setIsUpsertPublicViewModalOpen: PropTypes.func.isRequired,
	setIsDeletePublicViewModalOpen: PropTypes.func.isRequired,
	user: PropTypes.shape({ userName: PropTypes.string })
};
const defaultProps = {
	publicViews: [],
	user: {}
};
const PublicViewsTableWrapper = ({
	publicViews,
	isLoading,
	setActedView,
	setIsDeletePublicViewModalOpen,
	setIsUpsertPublicViewModalOpen,
	user
}) => {
	const onDeletePublicViewClick = (view) => {
		setActedView(view);
		setIsDeletePublicViewModalOpen(true);
	};

	const onEditPublicViewClick = (view) => {
		setActedView(view);
		setIsUpsertPublicViewModalOpen(true);
	};

	return (
		<Style className="animated fadeIn public-views-container">
			<Row>
				<Col>
					<PublicViewsTable
						getColumns={getColumns}
						isLoading={isLoading}
						publicViews={publicViews}
						onDeletePublicViewClick={onDeletePublicViewClick}
						onEditPublicViewClick={onEditPublicViewClick}
						username={user?.userName}
					/>
				</Col>
			</Row>
		</Style>
	);
};
PublicViewsTableWrapper.propTypes = propTypes;
PublicViewsTableWrapper.defaultProps = defaultProps;
export default PublicViewsTableWrapper;
