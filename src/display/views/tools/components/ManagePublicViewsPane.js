import React from 'react';
import PropTypes from 'prop-types';
import { TabPane, Col, Row, Button, CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PublicViewsTable from './public-views/PublicViewsTable';
import Card from '../../../shared/styled/Card';
import { useUserProfileQuery } from '~/infrastructure/hooks/queries';

const ManagePublicViewsPane = () => {
	const { data: user } = useUserProfileQuery();
	return (
		<TabPane tabId="public">
			<Card>
				<CardHeader>
					<FontAwesomeIcon icon={['fas', 'eye']} /> Manage Public Views
				</CardHeader>
				<CardBody className="card-body">
					<Row>
						<Col className="text-center">
							<p>
								{/* <Button
									color="primary"
									data-spec="create-public-view-button"
									onClick={() => openUpsertPublicViewModal({})}
								>
									Create New Public View
								</Button> */}
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
						getColumns={getColumns}
						username={user?.userName}
					/>
					{/* <PublicViewsTable
						publicViews={publicViews}
						openUpsertPublicViewModal={openUpsertPublicViewModal}
						openDeletePublicViewModal={openDeletePublicViewModal}
						isLoadingIconVisible={isLoadingIconVisible}
						username={username}
					/> */}
				</Col>
			</Row>
		</TabPane>
	);
};
ManagePublicViewsPane.propTypes = propTypes;
ManagePublicViewsPane.defaultProps = defaultProps;
export default ManagePublicViewsPane;
