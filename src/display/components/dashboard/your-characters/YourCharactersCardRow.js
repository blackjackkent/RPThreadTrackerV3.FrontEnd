import React from 'react';
import PropTypes from 'prop-types';

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
		<tr key={character.id}>
			<td>{character.characterName || 'Unnamed Character'} (<a href={character.homeUrl}>{character.urlIdentifier}</a>)</td>
			<td><a href="/edit">Edit</a></td>
		</tr>
	);
};

YourCharactersCard.propTypes = propTypes;

export default YourCharactersCard;
