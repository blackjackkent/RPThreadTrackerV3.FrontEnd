import React from 'react';
import {
	Row, Col, Card, CardHeader, CardBlock, CardFooter, Form, FormGroup, FormText, Input, Label, Button
} from 'reactstrap';
import AboutTrackerCard from './components/AboutTrackerCard';
import SupportTopicsCard from './components/SupportTopicsCard';
import ContactFormCard from './components/ContactFormCard';

const Help = () => (
	<div className="animated fadeIn static-container help-container">
		<Row>
			<Col>
				<SupportTopicsCard />
			</Col>
		</Row>
		<Row>
			<Col>
				<AboutTrackerCard />
			</Col>
		</Row>
		<Row>
			<Col>
				<ContactFormCard />
			</Col>
		</Row>
	</div >
);

export default Help;
