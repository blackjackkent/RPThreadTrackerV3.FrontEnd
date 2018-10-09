import React from 'react';
import PropTypes from 'prop-types';
import {
	TabPane, Col, Row, Button, CardHeader, CardBlock
} from 'reactstrap';
import PublicViewsTable from './public-views/PublicViewsTable';
import Card from '../../../shared/styled/Card';

const propTypes = {
	username: PropTypes.string,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	publicViews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUpsertPublicViewModal: PropTypes.func.isRequired,
	openDeletePublicViewModal: PropTypes.func.isRequired
};
const defaultProps = {
	username: ''
};

const ManagePublicViewsPane = (props) => {
	const {
		publicViews,
		openUpsertPublicViewModal,
		openDeletePublicViewModal,
		isLoadingIconVisible,
		username
	} = props;
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
									data-spec="create-public-view-button"
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
						isLoadingIconVisible={isLoadingIconVisible}
						username={username}
					/>
				</Col>
			</Row>
		</TabPane>
	);
};
ManagePublicViewsPane.propTypes = propTypes;
ManagePublicViewsPane.defaultProps = defaultProps;
export default ManagePublicViewsPane;
