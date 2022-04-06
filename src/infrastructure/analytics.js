import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-37563721-3';

function init() {
	ReactGA.initialize(TRACKING_ID);
}

function sendEvent(payload) {
	ReactGA.event(payload);
}

function sendPageview(path) {
	ReactGA.set({ page: path });
	ReactGA.pageview(path);
}

export default {
	init,
	sendEvent,
	sendPageview
};
