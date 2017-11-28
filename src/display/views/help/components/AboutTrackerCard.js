import React from 'react';
import {
	Row, Col, Card, CardHeader, CardBlock, CardFooter, Form, FormGroup, FormText, Input, Label, Button
} from 'reactstrap';

const AboutTrackerCard = () => (
	<Card className="about-tracker">
		<CardHeader>
			<i className="fa fa-info" />About RPThreadTracker
		</CardHeader>
		<CardBlock className="card-body">
			<p>
				RPThreadTracker allows users to track thread-based roleplay interactions
				and collaborative writing and stay up-to-date on which interactions they
				owe a reply on. Currently the app supports only roleplays on Tumblr,
				but will expand to support other platforms in the future.
			</p>
			<p>
				This site is in no way affiliated with Tumblr or any social media
				platform, nor does it make any direct connections to your account
				or posting permissions. It retrieves information solely through
				public application programming interfaces.
			</p>
			<p>RPThreadTracker is a product of <a href="http://www.blackjacksoftware.com">Blackjack Software</a>.</p>
		</CardBlock>
	</Card>
);

export default AboutTrackerCard;
