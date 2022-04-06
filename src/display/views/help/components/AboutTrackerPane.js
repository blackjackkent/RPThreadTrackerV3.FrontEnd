import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { TabPane, CardHeader, CardBody, Col, Row } from 'reactstrap';
import Card from '../../../shared/styled/Card';

const AboutTrackerPane = () => (
	<TabPane tabId="about">
		<Card>
			<CardHeader>
				<FontAwesomeIcon icon={['fas', 'info-circle']} /> About RPThreadTracker
			</CardHeader>
			<CardBody className="card-body">
				<p>
					RPThreadTracker allows users to track thread-based roleplay interactions and
					collaborative writing and stay up-to-date on which interactions they owe a reply
					on. Currently the app supports only roleplays on Tumblr, but will expand to
					support other platforms in the future.
				</p>
				<p>
					This site is in no way affiliated with Tumblr or any social media platform, nor
					does it make any direct connections to your account or posting permissions. It
					retrieves information solely through public application programming interfaces.
				</p>
				<p>
					RPThreadTracker is a product of{' '}
					<a href="http://www.twitter.com/blackjackkent">Blackjack Software</a>.
				</p>
				<hr />
				<p className="text-center">
					<strong>Many Thanks to Our Wonderful Patreon Supporters!</strong>
				</p>
				<p className="text-center">
					<em>
						Want to help keep RPThreadTracker running smoothly?
						<br />
						<a
							href="https://www.patreon.com/bePatron?u=4797959"
							rel="noopener noreferrer"
							target="_blank"
						>
							Become a patron today!{' '}
							<FontAwesomeIcon icon={['fas', 'external-link-alt']} />
						</a>
					</em>
				</p>
				<Row>
					<Col xs="4">
						<p>
							<strong>Kilobyte Tier ($5 a month)</strong>
						</p>
						<ul>
							<li>Abby S.</li>
							<li>Alex D.</li>
							<li>Alex Stahl</li>
							<li>Cassandra Clark</li>
							<li>The Colony Roleplay</li>
							<li>Ezra Wilson</li>
							<li>Isabella R.</li>
							<li>Rave</li>
							<li>Windress</li>
						</ul>
					</Col>
					<Col xs="4">
						<p>
							<strong>Megabyte Tier ($10 a month)</strong>
						</p>
						<ul>
							<li>Aeryn</li>
							<li>girl-next-door-writes</li>
							<li>insolitus-academy</li>
							<li>Melissa</li>
							<li>tabbyrp</li>
							<li>tyrantofthefirmament</li>
						</ul>
					</Col>
					<Col xs="4">
						<p>
							<strong>Gigabyte Tier ($20 a month)</strong>
						</p>
						<ul>
							<li>Lanie</li>
						</ul>
					</Col>
				</Row>
			</CardBody>
		</Card>
	</TabPane>
);

export default AboutTrackerPane;
