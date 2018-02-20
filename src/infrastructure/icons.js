import fontawesome from '@fortawesome/fontawesome';
import faArchive from '@fortawesome/fontawesome-free-solid/faArchive';
import faBolt from '@fortawesome/fontawesome-free-solid/faBolt';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faDollarSign from '@fortawesome/fontawesome-free-solid/faDollarSign';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import faFilter from '@fortawesome/fontawesome-free-solid/faFilter';
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff';
import faRandom from '@fortawesome/fontawesome-free-solid/faRandom';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';

const icons = {
	init: () => {
		fontawesome.library.add(faArchive);
		fontawesome.library.add(faBolt);
		fontawesome.library.add(faClock);
		fontawesome.library.add(faCog);
		fontawesome.library.add(faDollarSign);
		fontawesome.library.add(faEdit);
		fontawesome.library.add(faExternalLinkAlt);
		fontawesome.library.add(faFilter);
		fontawesome.library.add(faPowerOff);
		fontawesome.library.add(faRandom);
		fontawesome.library.add(faSearch);
		fontawesome.library.add(faTrashAlt);
		fontawesome.library.add(faUsers);
	}
};
export default icons;
