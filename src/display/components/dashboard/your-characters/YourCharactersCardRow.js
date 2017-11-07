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
	}).isRequired
};

const YourCharactersCard = (props) => {
	const { character } = props;
	return (
		<Row className="your-characters-card-row">
			<Col xs="6">
				{character.characterName || 'Unnamed Character'} (<a href={character.homeUrl}>{character.urlIdentifier}</a>)
			</Col>
			<Col xs="6">
				<a href={'characters/edit/' + character.id}>Edit</a>
			</Col>
		</Row>
	);
};

YourCharactersCard.propTypes = propTypes;

export default YourCharactersCard;
