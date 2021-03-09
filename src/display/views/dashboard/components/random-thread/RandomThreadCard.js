import React, { useState } from 'react';
import { CardHeader, CardBody } from 'reactstrap';
import Card from '../../../../shared/styled/Card';
import RandomThreadDisplay from './RandomThreadDisplay';
import { useFilteredActiveThreads } from '~/infrastructure/hooks/derived-data';
import filters from '~/infrastructure/constants/filters';

const RandomThreadCard = () => {
	const myTurnThreads = useFilteredActiveThreads(filters.MY_TURN);
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
		<Card className="random-thread-generator-card" data-spec="random-thread-generator-card">
			<CardHeader data-spec="random-thread-generator-header">
				<i className="fas fa-random" data-spec="random-thread-generator-icon" /> Random
				Thread Generator
			</CardHeader>
			<CardBody className="card-body">
				<button
					type="button"
					className="btn btn-primary"
					onClick={selectRandomThread}
					data-spec="random-thread-generator-button"
				>
					Generate
				</button>
				<RandomThreadDisplay data-spec="random-thread-display" threadData={randomThread} />
			</CardBody>
		</Card>
	);
};
export default RandomThreadCard;
