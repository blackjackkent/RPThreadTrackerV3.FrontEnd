import React from 'react';
import { useLightThemeContext } from '~/infrastructure/hooks/contexts';
import Style from './_styles';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { useLightTheme, setUseLightTheme } = useLightThemeContext();
	return (
		<Style className="app-footer">
			<a href="http://www.rpthreadtracker.com">RPThreadTracker</a> &copy; {currentYear}{' '}
			<a href="http://blackjack-software.com">Blackjack Software</a> | Switch to{' '}
			<button
				type="button"
				onKeyPress={() => setUseLightTheme(!useLightTheme)}
				onClick={() => setUseLightTheme(!useLightTheme)}
			>
				{useLightTheme ? 'dark theme' : 'light theme'}
			</button>{' '}
			| Support the tracker on{' '}
			<a
				href="https://www.patreon.com/bePatron?u=4797959"
				rel="noopener noreferrer"
				target="_blank"
			>
				Patreon
			</a>
			!
			<span className="float-right">
				Powered by <a href="http://coreui.io">CoreUI</a>
			</span>
		</Style>
	);
};

export default Footer;
