import React from 'react';
import { Container, Row, Col, CardBody } from 'reactstrap';
import Card from '../shared/styled/Card';

const Maintenance = () => {
	return (
		<div className="app flex-row align-items-center">
			<Container>
				<Row className="justify-content-center">
					<Col md="6">
						<Card className="login-box p-4">
							<CardBody className="card-body">
								<span className="clearfix">
									<h1 className="float-left display-3">503</h1>
									<h4 className="pt-3">Service Unavailable</h4>
									<p className="text-muted float-left">
										RPThreadTracker is temporarily down for maintenance.
									</p>
								</span>
								<p>
									Please see{' '}
									<a href="http://tblrthreadtracker.tumblr.com">
										our announcements blog
									</a>{' '}
									for further information and updates.
								</p>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Maintenance;
