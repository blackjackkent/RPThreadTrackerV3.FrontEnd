import React from 'react';
import {
	Row, Col, Card, CardHeader, CardBlock, CardFooter, Form, FormGroup, FormText, Input, Label, Button
} from 'reactstrap';

const SupportTopicsCard = () => (
	<Card className="support-topics">
		<CardHeader>
			<i className="fa fa-question" />Support Topics
					</CardHeader>
		<CardBlock className="card-body">
			<p className="support-button">
				<Button color="primary">
					Intro Tutorial: How to Use RPThreadTracker
							</Button>
			</p>
			<p className="support-button">
				<Button color="primary">
					How to Manage Queued Tumblr Posts
							</Button>
			</p>
		</CardBlock>
	</Card>
);

export default SupportTopicsCard;
