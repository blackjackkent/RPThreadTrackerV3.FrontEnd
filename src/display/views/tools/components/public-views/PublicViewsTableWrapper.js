import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Style from '~/display/shared/styled/TrackerTable';
import PublicViewsTable from './PublicViewsTable';
import { useCharactersQuery, useUserProfileQuery } from '~/infrastructure/hooks/queries';
import DeletePublicViewModal from '~/display/shared/modals/DeletePublicViewModal';
import UpsertPublicViewModal from '~/display/shared/modals/UpsertPublicViewModal';
import getColumns from './_columns';
import useAllTags from '~/infrastructure/hooks/derived-data/useAllTags';
import columns from '~/infrastructure/constants/columns';

const propTypes = {
	publicViews: PropTypes.arrayOf(PropTypes.shape({})),
	isLoading: PropTypes.bool.isRequired
};
const defaultProps = {
	publicViews: []
};
const PublicViewsTableWrapper = ({ publicViews, isLoading }) => {
	const [actedView, setActedView] = useState(null);
	const { data: user } = useUserProfileQuery();
	const { tagTextValues: tags } = useAllTags();
	const { data: characters } = useCharactersQuery();

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
				tags={tags}
				characters={characters}
				columns={columns}
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
PublicViewsTableWrapper.defaultProps = defaultProps;
export default PublicViewsTableWrapper;
