import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faArrowLeft,
	faBell,
	faBolt,
	faCheck,
	faChevronDown,
	faChevronRight,
	faClock,
	faCog,
	faDollarSign,
	faDownload,
	faEdit,
	faEnvelope,
	faExternalLinkAlt,
	faEye,
	faFlask,
	faInfoCircle,
	faKey,
	faLock,
	faPlayCircle,
	faPlusCircle,
	faPowerOff,
	faQuestionCircle,
	faRandom,
	faSearch,
	faShareAlt,
	faSyncAlt,
	faTags,
	faTimes,
	faTrashAlt,
	faUndo,
	faUnlock,
	faUsers,
	faUser
} from '@fortawesome/free-solid-svg-icons';

const icons = {
	init: () => {
		library.add(
			faArrowLeft,
			faBell,
			faBolt,
			faCheck,
			faChevronDown,
			faChevronRight,
			faClock,
			faCog,
			faDollarSign,
			faDownload,
			faEdit,
			faEnvelope,
			faExternalLinkAlt,
			faEye,
			faFlask,
			faInfoCircle,
			faKey,
			faLock,
			faPlayCircle,
			faPlusCircle,
			faPowerOff,
			faQuestionCircle,
			faRandom,
			faSearch,
			faShareAlt,
			faSyncAlt,
			faTags,
			faTimes,
			faTrashAlt,
			faUndo,
			faUnlock,
			faUsers,
			faUser
		);
	}
};

export default icons;
