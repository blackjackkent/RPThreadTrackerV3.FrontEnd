import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardBlock } from 'reactstrap';
import PropTypes from 'prop-types';

const Maintenance = () => (
	<div className="app flex-row align-items-center">
		<Container>
			<Row className="justify-content-center">
				<Col md="6">
					<Card className="login-box p-4">
						<CardBlock className="card-body">
							<span className="clearfix">
								<h1 className="float-left display-3">503</h1>
								<h4 className="pt-3">Service Unavailable</h4>
								<p className="text-muted float-left">RPThreadTracker is temporarily down for maintenance.</p>
							</span>
							<p>Please see <a href="http://tblrthreadtracker.tumblr.com">our announcements blog</a> for further information and updates.</p>
						</CardBlock>
					</Card>
				</Col>
			</Row>
		</Container>
	</div>
);

export default Maintenance;
