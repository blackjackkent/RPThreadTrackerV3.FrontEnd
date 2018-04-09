import fontawesome from '@fortawesome/fontawesome';
import faArchive from '@fortawesome/fontawesome-free-solid/faArchive';
import faBolt from '@fortawesome/fontawesome-free-solid/faBolt';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faDollarSign from '@fortawesome/fontawesome-free-solid/faDollarSign';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import faFilter from '@fortawesome/fontawesome-free-solid/faFilter';
import faKey from '@fortawesome/fontawesome-free-solid/faKey';
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff';
import faRandom from '@fortawesome/fontawesome-free-solid/faRandom';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faTags from '@fortawesome/fontawesome-free-solid/faTags';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

const icons = {
	init: () => {
		fontawesome.library.add(faArchive);
		fontawesome.library.add(faBolt);
		fontawesome.library.add(faClock);
		fontawesome.library.add(faCog);
		fontawesome.library.add(faDollarSign);
		fontawesome.library.add(faDownload);
		fontawesome.library.add(faEdit);
		fontawesome.library.add(faExternalLinkAlt);
		fontawesome.library.add(faFilter);
		fontawesome.library.add(faKey);
		fontawesome.library.add(faPowerOff);
		fontawesome.library.add(faRandom);
		fontawesome.library.add(faSearch);
		fontawesome.library.add(faTags);
		fontawesome.library.add(faTimes);
		fontawesome.library.add(faTrashAlt);
		fontawesome.library.add(faUsers);
		fontawesome.library.add(faUser);
	}
};
export default icons;
