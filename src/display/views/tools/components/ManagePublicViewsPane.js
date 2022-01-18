import React from 'react';
import PropTypes from 'prop-types';
import { TabPane, Col, Row, Button, CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PublicViewsTable from './public-views/PublicViewsTable';
import Card from '../../../shared/styled/Card';
import usePublicViewsQuery from '~/infrastructure/hooks/queries/usePublicViewsQuery';
import PublicViewsTableWrapper from './public-views/PublicViewsTableWrapper';

const ManagePublicViewsPane = () => {
	const { data: publicViews, isLoading: isPublicViewsLoading } = usePublicViewsQuery();
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
					/>
				</Col>
			</Row>
		</TabPane>
	);
};
export default ManagePublicViewsPane;
