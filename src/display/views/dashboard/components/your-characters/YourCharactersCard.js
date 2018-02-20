import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBlock } from 'reactstrap';
import YourCharactersCardRow from './YourCharactersCardRow';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	characterThreadCounts: PropTypes.shape({}).isRequired
};

const YourCharactersCard = (props) => {
	const { characters, characterThreadCounts } = props;
	return (
		<Card className="your-characters-card">
			<CardHeader>
				<i className="fas fa-users" /> Your Characters
				<div className="float-right">
					<Link href="/manage-characters" to="/manage-characters">Manage Characters</Link>
				</div>
			</CardHeader>
			<CardBlock className="card-body">
				{
					characters.map(character =>
						(<YourCharactersCardRow
							character={character}
							key={character.characterId}
							threadCount={characterThreadCounts[character.characterId]}
						/>))
				}
			</CardBlock>
		</Card>
	);
};

YourCharactersCard.propTypes = propTypes;

export default YourCharactersCard;
