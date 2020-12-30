import React from 'react';
import PropTypes from 'prop-types';
import Style from './_styles';

const propTypes = {
	useLightTheme: PropTypes.bool.isRequired,
	toggleTheme: PropTypes.func.isRequired
};

const Footer = (props) => {
	const currentYear = new Date().getFullYear();
	const { useLightTheme, toggleTheme } = props;
	return (
		<Style className="app-footer">
			<a href="http://www.rpthreadtracker.com">RPThreadTracker</a> &copy; {currentYear}{' '}
			<a href="http://blackjack-software.com">Blackjack Software</a> | Switch to{' '}
			<button
				type="button"
				onKeyPress={toggleTheme}
				onClick={toggleTheme}
				data-spec="footer-theme-toggle-button"
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

Footer.propTypes = propTypes;
export default Footer;
