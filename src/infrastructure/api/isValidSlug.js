// #region imports
import axios from 'axios';
// #endregion imports

async function isValidSlug(slug, viewId) {
	let url = `${API_BASE_URL}api/publicviewmanagement/isvalidslug/${slug}`;
	if (viewId) {
		url += `/${viewId}`;
	}
	return new Promise((resolve, reject) => {
		axios.get(url)
			.then(() => resolve())
			.catch(() => reject());
	});
}

export default isValidSlug;
