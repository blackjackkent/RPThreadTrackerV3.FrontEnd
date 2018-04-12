import React from 'react';

const currentYear = (new Date()).getFullYear();

const Footer = () => (
	<footer className="app-footer">
		<a href="http://www.rpthreadtracker.com">RPThreadTracker</a> &copy; {currentYear} <a href="http://blackjack-software.com">Blackjack Software</a>
		<span className="float-right">Powered by <a href="http://coreui.io">CoreUI</a></span>
	</footer>
);

export default Footer;
