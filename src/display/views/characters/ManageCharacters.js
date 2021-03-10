// #region imports
import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import CurrentCharacterTable from './components/CurrentCharacterTable';
import Style from './_styles';
import { useCharactersContext } from '~/infrastructure/hooks/contexts';
import { useCharacterThreadCounts } from '~/infrastructure/hooks/derived-data';
import GenericConfirmationModal from '~/display/shared/modals/GenericConfirmationModal';
import {
	useCreateCharacterMutation,
	useUntrackCharacterMutation,
	useUpdateCharacterMutation
} from '~/infrastructure/hooks/mutations';
import UpsertCharacterModal from '~/display/shared/modals/UpsertCharacterModal';
// #endregion imports

const ManageCharacters = () => {
	const { characters, isCharactersLoading } = useCharactersContext();
	const threadCounts = useCharacterThreadCounts();
	const {
		untrackCharacter,
		isLoading: isUntrackCharacterLoading
	} = useUntrackCharacterMutation();
	const { createCharacter, isLoading: isCreateCharacterLoading } = useCreateCharacterMutation();
	const { updateCharacter, isLoading: isUpdateCharacterLoading } = useUpdateCharacterMutation();
	const [isUntrackCharacterModalOpen, setIsUntrackCharacterModalOpen] = useState(false);
	const [isUpsertCharacterModalOpen, setIsUpsertCharacterModalOpen] = useState(false);
	const [selectedCharacter, setSelectedCharacter] = useState(null);

	const toggleCharacterIsOnHiatus = (character) => {
		const newValue = !character.isOnHiatus;
		const updatedCharacter = {
			...character,
			isOnHiatus: newValue
		};
		updateCharacter(updatedCharacter)
			.then(() => {
				toast.success(newValue ? 'Character set on hiatus!' : 'Character set off hiatus!');
			})
			.catch(() => {
				toast.error(`There was an error updating this character.`);
			});
	};
	const submitUntrackCharacter = (character) => {
		untrackCharacter(character)
			.then(() => {
				setIsUntrackCharacterModalOpen(false);
				toast.success('Character untracked!');
			})
			.catch(() => {
				toast.error(`There was an error untracking this character.`);
			});
	};
	const submitUpsertCharacter = (character) => {
		const upsertFn = character.characterId ? updateCharacter : createCharacter;
		upsertFn(character)
			.then(() => {
				setIsUpsertCharacterModalOpen(false);
				toast.success('Character updated!');
			})
			.catch(() => {
				toast.error(`There was an error updating this character.`);
			});
	};

	const openUntrackCharacterModal = (character) => {
		setSelectedCharacter(character);
		setIsUntrackCharacterModalOpen(true);
	};

	const openUpsertCharacterModal = (character) => {
		setSelectedCharacter(character);
		setIsUpsertCharacterModalOpen(true);
	};
	return (
		<Style className="animated fadeIn">
			<Row>
				<Col>
					<UpsertCharacterModal
						isModalOpen={isUpsertCharacterModalOpen}
						setIsModalOpen={setIsUpsertCharacterModalOpen}
						characterToEdit={selectedCharacter}
						submitForm={submitUpsertCharacter}
						isLoading={isCreateCharacterLoading || isUpdateCharacterLoading}
					/>
					<GenericConfirmationModal
						isModalOpen={isUntrackCharacterModalOpen}
						setIsModalOpen={setIsUntrackCharacterModalOpen}
						submitForm={submitUntrackCharacter}
						submitButtonText="Untrack"
						closeButtonText="Cancel"
						isLoading={isUntrackCharacterLoading}
						data={selectedCharacter}
						headerText="Confirm Character Untracking"
						bodyText={
							<span>
								Are you sure you want to untrack{' '}
								<strong>
									{selectedCharacter?.characterName
										? selectedCharacter?.characterName
										: selectedCharacter?.urlIdentifier}
								</strong>
								? This will also untrack all threads associated with this character.
							</span>
						}
					/>
					<CurrentCharacterTable
						data-spec="manage-characters-current-character-table"
						characters={characters}
						openUpsertCharacterModal={openUpsertCharacterModal}
						toggleCharacterIsOnHiatus={toggleCharacterIsOnHiatus}
						openUntrackCharacterModal={openUntrackCharacterModal}
						isLoadingIconVisible={isCharactersLoading}
						threadCounts={threadCounts}
					/>
				</Col>
			</Row>
		</Style>
	);
};
export default ManageCharacters;
