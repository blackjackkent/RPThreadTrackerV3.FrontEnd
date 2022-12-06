import React, { useState } from 'react';
import { CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFilteredActiveThreads } from '~/infrastructure/hooks/derived-data';
import filters from '~/infrastructure/constants/filters';
import Card from '../../../../shared/styled/Card';
import RandomThreadDisplay from './RandomThreadDisplay';

const RandomThreadCard = () => {
	const { filteredThreads: myTurnThreads } = useFilteredActiveThreads(filters.MY_TURN);
	const [randomThread, setRandomThread] = useState(null);
	const selectRandomThread = () => {
		if (!myTurnThreads?.length) {
			setRandomThread(null);
			return;
		}
		const validThreads = myTurnThreads.filter((t) => !t.status || t.status.lastPostUrl);
		setRandomThread(validThreads[Math.floor(Math.random() * validThreads.length)]);
	};
	return (
		<Card className="random-thread-generator-card">
			<CardHeader>
				<FontAwesomeIcon icon={['fas', 'random']} /> Random Thread Generator
			</CardHeader>
			<CardBody className="card-body">
				<button type="button" className="btn btn-primary" onClick={selectRandomThread}>
					Generate
				</button>
				<RandomThreadDisplay threadData={randomThread} />
			</CardBody>
		</Card>
	);
};
export default RandomThreadCard;
