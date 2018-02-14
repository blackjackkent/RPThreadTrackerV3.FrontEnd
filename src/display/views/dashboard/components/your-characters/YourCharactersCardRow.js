import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const propTypes = {
	character: PropTypes.shape({
		id: PropTypes.number,
		characterName: PropTypes.string,
		urlIdentifier: PropTypes.string.isRequired,
		homeUrl: PropTypes.string.isRequired,
		isOnHiatus: PropTypes.bool.isRequired
	}).isRequired,
	threadCount: PropTypes.number.isRequired
};

const YourCharactersCard = (props) => {
	const { character, threadCount } = props;
	return (
		<Row className="your-characters-card-row">
			<Col xs="4">
				{character.characterName || 'Unnamed Character'}
			</Col>
			<Col xs="4">
				<a target="_blank" href={character.homeUrl}>{character.urlIdentifier}</a>
			</Col>
			<Col xs="4">
				{threadCount} {threadCount === 1 ? 'thread' : 'threads'}
			</Col>
		</Row>
	);
};

YourCharactersCard.propTypes = propTypes;

export default YourCharactersCard;
