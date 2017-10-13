import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	item: PropTypes.shape({
		characterName: PropTypes.string,
		urlIdentifier: PropTypes.string.isRequired,
		isOnHiatus: PropTypes.bool.isRequired
	}).isRequired
};

const YourCharactersCard = (props) => {
	const { item } = props;
	return (
		<tr key={item.id}>
			<td>{item.characterName || 'Unnamed Character'} (<a href="/url">{item.urlIdentifier}</a>)</td>
			<td><a href="/edit">Edit</a></td>
		</tr>
	);
};

YourCharactersCard.propTypes = propTypes;

export default YourCharactersCard;
