import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardHeader, CardBody } from 'reactstrap';
import Card from '~/display/shared/styled/Card';
import YourCharactersCardRow from './YourCharactersCardRow';
import NoCharactersMessage from '../shared/NoCharactersMessage';
import NoActiveCharactersMessage from '../shared/NoActiveCharactersMessage';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import { useCharactersContext } from '~/infrastructure/hooks/contexts';
import { useCharacterThreadCounts } from '~/infrastructure/hooks/derived-data';

const renderBlockMessage = (characters, activeCharacters) => {
	if (characters.length > 0 && activeCharacters.length === 0) {
		return <NoActiveCharactersMessage />;
	}
	return <NoCharactersMessage />;
};

const YourCharactersCard = () => {
	const { characters, isCharactersLoading } = useCharactersContext();
	const characterThreadCounts = useCharacterThreadCounts();
	const activeCharacters = characters?.filter((c) => !c.isOnHiatus);
	return (
		<Card className="your-characters-card">
			<CardHeader>
				<i className="fas fa-users" /> Your Characters
				<div className="float-right">
					<Link href="/manage-characters" to="/manage-characters">
						Manage Characters
					</Link>
				</div>
			</CardHeader>
			<CardBody className="card-body">
				{isCharactersLoading && (
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
				)}
				{!isCharactersLoading &&
					activeCharacters &&
					activeCharacters.map((character) => (
						<YourCharactersCardRow
							character={character}
							key={character.characterId}
							threadCount={characterThreadCounts[character.characterId]}
							data-spec="your-characters-card-row"
						/>
					))}
				{!isCharactersLoading &&
					!activeCharacters &&
					renderBlockMessage(characters, characterThreadCounts)}
			</CardBody>
		</Card>
	);
};
export default YourCharactersCard;
