import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader, CardBlock } from 'reactstrap';
import Card from '../../../../shared/styled/Card';
import RandomThreadDisplay from './RandomThreadDisplay';

const propTypes = {
	randomThread: PropTypes.shape({}).isRequired,
	generateRandomThread: PropTypes.func.isRequired
};

const RandomThreadCard = (props) => {
	const { generateRandomThread, randomThread } = props;
	return (
		<Card className="random-thread-generator-card" data-spec="random-thread-generator-card">
			<CardHeader data-spec="random-thread-generator-header">
				<i
					className="fas fa-random"
					data-spec="random-thread-generator-icon"
				/> Random Thread Generator
			</CardHeader>
			<CardBlock className="card-body">
				<button
					type="button"
					className="btn btn-primary"
					onClick={generateRandomThread}
					data-spec="random-thread-generator-button"
				>
					Generate
				</button>
				<RandomThreadDisplay data-spec="random-thread-display" threadData={randomThread} />
			</CardBlock>
		</Card>
	);
};
RandomThreadCard.propTypes = propTypes;
export default RandomThreadCard;
