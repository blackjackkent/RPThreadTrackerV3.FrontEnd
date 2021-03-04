import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';

import * as selectors from '../../../infrastructure/selectors';
import { useCacheValue } from '~/infrastructure/hooks';
import {
	useCreateThreadMutation,
	useUpdateUserSettingsMutation,
	useCreateCharacterMutation
} from '~/infrastructure/hooks/mutations';
import cacheKeys from '~/infrastructure/constants/cacheKeys';
import {
	useCharactersQuery,
	useNewsQuery,
	useUserProfileQuery,
	useUserSettingsQuery
} from '~/infrastructure/hooks/queries';
import {
	HeaderLogoBlock,
	HeaderAsideToggle,
	HeaderProfileDropdown,
	HeaderAddMenuDropdown
} from './components';
import Style from './_styles';
import UpsertThreadModal from '../modals/UpsertThreadModal';
import UpsertCharacterModal from '../modals/UpsertCharacterModal';

function mapStateToProps(state) {
	const { ui, user, news, userSettings } = state;
	const {
		isNewsAsideOpen,
		isSidebarOpen,
		isHeaderProfileDropdownOpen,
		isHeaderAddMenuDropdownOpen,
		isMobileSidebarOpen
	} = ui;
	const newsUnreadCount = selectors.getNewsUnreadCount(state);
	return {
		isNewsAsideOpen,
		isSidebarOpen,
		isHeaderProfileDropdownOpen,
		isHeaderAddMenuDropdownOpen,
		isMobileSidebarOpen,
		user,
		news,
		newsUnreadCount,
		userSettings
	};
}

const HeaderContainer = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useCacheValue(cacheKeys.IS_SIDEBAR_OPEN);
	const [isNewsAsideOpen, setIsNewsAsideOpen] = useState(false);
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
	const [isHeaderProfileDropdownVisible, setIsHeaderProfileDropdownVisible] = useState(false);
	const [isHeaderAddMenuDropdownVisible, setIsHeaderAddMenuDropdownVisible] = useState(false);
	const [isUpsertThreadModalOpen, setIsUpsertThreadModalOpen] = useState(false);
	const [isUpsertCharacterModalOpen, setIsUpsertCharacterModalOpen] = useState(false);
	const [unreadNewsCount, setUnreadNewsCount] = useState(0);
	const { data: characters } = useCharactersQuery();
	const { data: userSettings } = useUserSettingsQuery();
	const { data: news } = useNewsQuery();
	const { data: user } = useUserProfileQuery();
	const { mutate: updateUserSettings } = useUpdateUserSettingsMutation();
	const { mutate: createThread } = useCreateThreadMutation();
	const { mutate: createCharacter } = useCreateCharacterMutation();

	useEffect(() => {
		if (!userSettings || !news) {
			return;
		}
		const { lastNewsReadDate } = userSettings;
		const dateValue = new Date(lastNewsReadDate);
		let unreadCount = 0;
		news.forEach((n) => {
			if (!lastNewsReadDate || !dateValue || new Date(n.postDate) > dateValue) {
				unreadCount++;
			}
		});
		setUnreadNewsCount(unreadCount);
	}, [news, userSettings]);

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

	return (
		<Style className="app-header navbar">
			<UpsertThreadModal
				isModalOpen={isUpsertThreadModalOpen}
				onModalClose={() => setIsUpsertThreadModalOpen(false)}
				onInputChange={null}
				onFormSubmit={createThread}
				characters={characters}
				thread={{}}
			/>
			<UpsertCharacterModal
				isUpsertCharacterModalOpen={isUpsertCharacterModalOpen}
				closeUpsertCharacterModal={() => setIsUpsertCharacterModalOpen(false)}
				submitUpsertCharacter={createCharacter}
				characterToEdit={{}}
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
