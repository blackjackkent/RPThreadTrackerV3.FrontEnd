import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardHeader, CardBlock } from 'reactstrap';
import Card from '../../../../shared/styled/Card';
import YourCharactersCardRow from './YourCharactersCardRow';
import NoCharactersMessage from '../NoCharactersMessage';
import NoActiveCharactersMessage from '../NoActiveCharactersMessage';
import LoadingIndicator from '../../../../shared/loading/LoadingIndicator';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	characterThreadCounts: PropTypes.shape({}).isRequired,
	loadingInProgress: PropTypes.bool.isRequired
};

const getBlockContent = (loadingInProgress, characters, characterThreadCounts) => {
	if (loadingInProgress) {
		return (
			<LoadingIndicator
				style={{
					width: 50,
					height: 50,
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}
			/>
		);
	}
	if (characters.length === 0) {
		return (<NoCharactersMessage />);
	}
	const activeCharacters = characters.filter(c => !c.isOnHiatus);
	if (characters.length > 0 && activeCharacters.length === 0) {
		return (<NoActiveCharactersMessage />);
	}
	return activeCharacters.map(character => (
		<YourCharactersCardRow
			character={character}
			key={character.characterId}
			threadCount={characterThreadCounts[character.characterId]}
			data-spec="your-characters-card-row"
		/>
	));
};

const YourCharactersCard = (props) => {
	const { characters, characterThreadCounts, loadingInProgress } = props;
	return (
		<Card className="your-characters-card">
			<CardHeader>
				<i className="fas fa-users" /> Your Characters
				<div className="float-right">
					<Link href="/manage-characters" to="/manage-characters">Manage Characters</Link>
				</div>
			</CardHeader>
			<CardBlock className="card-body">
				{getBlockContent(
					loadingInProgress,
					characters,
					characterThreadCounts
				)}
			</CardBlock>
		</Card>
	);
};

YourCharactersCard.propTypes = propTypes;

export default YourCharactersCard;
