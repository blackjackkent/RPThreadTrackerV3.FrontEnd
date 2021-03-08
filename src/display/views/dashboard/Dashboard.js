import React from 'react';
import { Row, Col } from 'reactstrap';
import AtAGlanceCard from './components/at-a-glance/AtAGlanceCard';
import RecentActivityCard from './components/recent-activity/RecentActivityCard';
import YourCharactersCard from './components/your-characters/YourCharactersCard';
import TrackerSupportCard from './components/tracker-support/TrackerSupportCard';
import RandomThreadCard from './components/random-thread/RandomThreadCard';
import Style from './_styles';

const Dashboard = () => {
	return (
		<Style className="animated fadeIn dashboard-container">
			<Row>
				<Col>
					<AtAGlanceCard />
				</Col>
			</Row>
			<Row>
				<Col xs="12" md="6">
					<RecentActivityCard />
				</Col>
				<Col xs="12" md="6">
					{/* <YourCharactersCard
						characters={characters}
						characterThreadCounts={characterThreadCounts}
						loadingInProgress={isLoadingIconVisible}
					/> */}
				</Col>
			</Row>
			<Row>
				<Col md="6" xs="12">
					{/* <RandomThreadCard
						data-spec="dashboard-random-thread-card"
						generateRandomThread={generateRandomThread}
						randomThread={randomThread}
					/> */}
				</Col>
				<Col md="6" xs="12">
					<TrackerSupportCard />
				</Col>
			</Row>
		</Style>
	);
};

export default Dashboard;
