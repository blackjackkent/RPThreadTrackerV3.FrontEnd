import React from 'react';
import PropTypes from 'prop-types';
import { TabPane, Col, Row, Button, Card, CardHeader, CardBlock } from 'reactstrap';
import PublicViewsTable from './public-views/PublicViewsTable';

const propTypes = {
	publicViews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUpsertPublicViewModal: PropTypes.func.isRequired,
	openDeletePublicViewModal: PropTypes.func.isRequired
};

const ManagePublicViewsPane = (props) => {
	const { publicViews, openUpsertPublicViewModal, openDeletePublicViewModal } = props;
	return (
		<TabPane tabId="manage-public-views">
			<Card>
				<CardHeader>
					<i
						className="fas fa-eye"
					/> Manage Public Views
				</CardHeader>
				<CardBlock className="card-body">
					<Row>
						<Col className="text-center">
							<p>
								<Button
									color="primary"
									onClick={
										() => openUpsertPublicViewModal({})}
								>
									Create New Public View
								</Button>
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<p className="text-center">
								Public views allow you to customize a display of your current threads
								and share them with others.
							</p>
						</Col>
					</Row>
				</CardBlock>
			</Card>
			<Row>
				<Col>
					<PublicViewsTable
						publicViews={publicViews}
						openUpsertPublicViewModal={openUpsertPublicViewModal}
						openDeletePublicViewModal={openDeletePublicViewModal}
					/>
				</Col>
			</Row>
		</TabPane>
	);
};
ManagePublicViewsPane.propTypes = propTypes;
export default ManagePublicViewsPane;
