import React, { useEffect, useState } from 'react';
import { Nav } from 'reactstrap';
import { toast } from 'react-toastify';
import { useCacheValue } from '~/infrastructure/hooks';
import {
	useUpdateUserSettingsMutation,
	useCreateCharacterMutation
} from '~/infrastructure/hooks/mutations';
import cacheKeys from '~/infrastructure/constants/cacheKeys';
import { useNewsQuery, useUserProfileQuery } from '~/infrastructure/hooks/queries';
import {
	HeaderLogoBlock,
	HeaderAsideToggle,
	HeaderProfileDropdown,
	HeaderAddMenuDropdown
} from './components';
import Style from './_styles';
import UpsertThreadModal from '../modals/UpsertThreadModal';
import UpsertCharacterModal from '../modals/UpsertCharacterModal';
import { useCharactersContext } from '~/infrastructure/hooks/contexts';

const HeaderContainer = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useCacheValue(cacheKeys.IS_SIDEBAR_OPEN);
	const [isNewsAsideOpen, setIsNewsAsideOpen] = useState(false);
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
	const [isHeaderProfileDropdownVisible, setIsHeaderProfileDropdownVisible] = useState(false);
	const [isHeaderAddMenuDropdownVisible, setIsHeaderAddMenuDropdownVisible] = useState(false);
	const [isUpsertThreadModalOpen, setIsUpsertThreadModalOpen] = useState(false);
	const [isUpsertCharacterModalOpen, setIsUpsertCharacterModalOpen] = useState(false);
	const { characters } = useCharactersContext();
	const { unreadNewsCount, userSettings, setUnreadNewsCount } = useNewsQuery();
	const { data: user } = useUserProfileQuery();
	const { updateUserSettings } = useUpdateUserSettingsMutation();
	const { createCharacter, isLoading: isCreateCharacterLoading } = useCreateCharacterMutation();

	useEffect(() => {
		document.body.classList.toggle('sidebar-hidden', isSidebarOpen);
		document.body.classList.toggle('aside-menu-hidden', !isNewsAsideOpen);
		document.body.classList.toggle('sidebar-mobile-show', isMobileSidebarOpen);
	}, [isSidebarOpen, isNewsAsideOpen, isMobileSidebarOpen]);

	const toggleNewsAside = () => {
		if (isNewsAsideOpen) {
			updateUserSettings({
				...userSettings,
				lastNewsReadDate: new Date(Date.now())
			});
			setUnreadNewsCount(0);
		}
		setIsNewsAsideOpen(!isNewsAsideOpen);
	};

	const submitCreateCharacter = (character) => {
		createCharacter(character)
			.then(() => {
				setIsUpsertCharacterModalOpen(false);
				toast.success(
					`Added ${
						character.characterName ? character.characterName : character.urlIdentifier
					} to the character list!`
				);
			})
			.catch(() => {
				toast.error(`There was an error adding this character.`);
			});
	};

	return (
		<Style className="app-header navbar">
			<UpsertThreadModal
				characters={characters}
				isModalOpen={isUpsertThreadModalOpen}
				setIsModalOpen={setIsUpsertThreadModalOpen}
			/>
			<UpsertCharacterModal
				isModalOpen={isUpsertCharacterModalOpen}
				setIsModalOpen={setIsUpsertCharacterModalOpen}
				submitForm={submitCreateCharacter}
				isLoading={isCreateCharacterLoading}
			/>
			<HeaderLogoBlock
				isMobileSidebarOpen={isMobileSidebarOpen}
				setIsMobileSidebarOpen={setIsMobileSidebarOpen}
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<Nav className="ml-auto" navbar>
				<HeaderAsideToggle
					toggleNewsAside={toggleNewsAside}
					unreadNewsCount={unreadNewsCount}
				/>
				<HeaderAddMenuDropdown
					isHeaderAddMenuDropdownVisible={isHeaderAddMenuDropdownVisible}
					setIsHeaderAddMenuDropdownVisible={setIsHeaderAddMenuDropdownVisible}
					isUpsertCharacterModalOpen={isUpsertCharacterModalOpen}
					setIsUpsertCharacterModalOpen={setIsUpsertCharacterModalOpen}
					isUpsertThreadModalOpen={isUpsertThreadModalOpen}
					setIsUpsertThreadModalOpen={setIsUpsertThreadModalOpen}
				/>
				<HeaderProfileDropdown
					isHeaderProfileDropdownVisible={isHeaderProfileDropdownVisible}
					setIsHeaderProfileDropdownVisible={setIsHeaderProfileDropdownVisible}
					user={user}
				/>
			</Nav>
		</Style>
	);
};

export default HeaderContainer;
