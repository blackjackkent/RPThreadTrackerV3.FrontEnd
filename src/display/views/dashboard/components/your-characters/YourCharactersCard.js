import React from 'react';
import { Link } from 'react-router-dom';
import { CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '~/display/shared/styled/Card';
import LoadingIndicator from '~/display/shared/loading/LoadingIndicator';
import { useCharactersContext } from '~/infrastructure/hooks/contexts';
import { useCharacterThreadCounts } from '~/infrastructure/hooks/derived-data';
import YourCharactersCardRow from './YourCharactersCardRow';
import NoCharactersMessage from '../shared/NoCharactersMessage';
import NoActiveCharactersMessage from '../shared/NoActiveCharactersMessage';

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
				<FontAwesomeIcon icon={['fas', 'users']} /> Your Characters
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
