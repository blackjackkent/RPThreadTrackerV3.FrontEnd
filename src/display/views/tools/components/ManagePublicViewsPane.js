import React from 'react';
import PropTypes from 'prop-types';
import { TabPane, Col, Row, Button, Card, CardHeader, CardBlock } from 'reactstrap';

const propTypes = {
	publicViews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUpsertPublicViewModal: PropTypes.func.isRequired
};

const ManagePublicViewsPane = (props) => {
	const { publicViews, openUpsertPublicViewModal } = props;
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
		</TabPane>
	);
};
ManagePublicViewsPane.propTypes = propTypes;
export default ManagePublicViewsPane;
