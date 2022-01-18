import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Style from '~/display/shared/styled/TrackerTable';
import PublicViewsTable from './PublicViewsTable';
import { useUserProfileQuery } from '~/infrastructure/hooks/queries';

const propTypes = {
	publicViews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isLoading: PropTypes.bool.isRequired,
	getColumns: PropTypes.func.isRequired
};
const PublicViewsTableWrapper = ({ publicViews, isLoading, getColumns }) => {
	const [actedView, setActedView] = useState(null);
	const { data: user } = useUserProfileQuery();

	const [isDeletePublicViewModalOpen, setIsDeletePublicViewModalOpen] = useState(false);
	const [isUpsertPublicViewModalOpen, setIsUpsertPublicViewModalOpen] = useState(false);

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
			<DeletePublicViewModal
				actedView={actedView}
				isModalOpen={isDeletePublicViewModalOpen}
				setIsModalOpen={setIsDeletePublicViewModalOpen}
			/>
			<UpsertPublicViewModal
				actedView={actedView}
				isModalOpen={isUpsertPublicViewModalOpen}
				setIsModalOpen={setIsUpsertPublicViewModalOpen}
			/>
			<Row>
				<Col>
					<PublicViewsTable
						getColumns={getColumns}
						isLoading={isLoading}
						publicViews={publicViews}
						onDeletePublicViewClick={onDeletePublicViewClick}
						onEditPublicViewClick={onEditPublicViewClick}
						username={user?.username}
					/>
				</Col>
			</Row>
		</Style>
	);
};
PublicViewsTableWrapper.propTypes = propTypes;
export default PublicViewsTableWrapper;
