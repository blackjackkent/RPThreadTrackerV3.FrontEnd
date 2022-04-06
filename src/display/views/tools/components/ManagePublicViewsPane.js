import React, { useState } from 'react';
import { TabPane, Col, Row, Button, CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import columns from '~/infrastructure/constants/columns';
import Card from '../../../shared/styled/Card';
import usePublicViewsQuery from '~/infrastructure/hooks/queries/usePublicViewsQuery';
import PublicViewsTableWrapper from './public-views/PublicViewsTableWrapper';
import { useCharactersQuery, useUserProfileQuery } from '~/infrastructure/hooks/queries';
import useAllTags from '~/infrastructure/hooks/derived-data/useAllTags';
import DeletePublicViewModal from '~/display/shared/modals/DeletePublicViewModal';
import UpsertPublicViewModal from '~/display/shared/modals/UpsertPublicViewModal';

const ManagePublicViewsPane = () => {
	const { data: publicViews, isLoading: isPublicViewsLoading } = usePublicViewsQuery();
	const [actedView, setActedView] = useState(null);
	const { data: user } = useUserProfileQuery();
	const { tagTextValues: tags } = useAllTags();
	const { data: characters } = useCharactersQuery();

	const [isDeletePublicViewModalOpen, setIsDeletePublicViewModalOpen] = useState(false);
	const [isUpsertPublicViewModalOpen, setIsUpsertPublicViewModalOpen] = useState(false);
	return (
		<TabPane tabId="public">
			<Card>
				<CardHeader>
					<FontAwesomeIcon icon={['fas', 'eye']} /> Manage Public Views
				</CardHeader>
				<CardBody className="card-body">
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
						<Col className="text-center">
							<p>
								<Button
									color="primary"
									onClick={() => setIsUpsertPublicViewModalOpen(true)}
								>
									Create New Public View
								</Button>
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<p className="text-center">
								Public views allow you to customize a display of your current
								threads and share them with others.
							</p>
						</Col>
					</Row>
				</CardBody>
			</Card>
			<Row>
				<Col>
					<PublicViewsTableWrapper
						publicViews={publicViews}
						isLoading={isPublicViewsLoading}
						setActedView={setActedView}
						setIsUpsertPublicViewModalOpen={setIsUpsertPublicViewModalOpen}
						setIsDeletePublicViewModalOpen={setIsDeletePublicViewModalOpen}
						user={user}
					/>
				</Col>
			</Row>
		</TabPane>
	);
};
export default ManagePublicViewsPane;
