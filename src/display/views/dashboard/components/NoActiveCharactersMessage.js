import React from 'react';
import { Link } from 'react-router-dom';

const NoActiveCharactersMessage = () => (
	<div className="dashboard-card-center-message">
		You do not have any active characters.
		<br />
		Click &quot;Add Character&quot; in the header menu to add one, or visit{' '}
		<Link href="/manage-characters" to="/manage-characters">
			Manage Characters
		</Link>{' '}
		to activate an existing hiatused character.
	</div>
);

export default NoActiveCharactersMessage;
