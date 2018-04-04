// #region imports
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	EXPORT_THREADS,
	exportThreadsFailure,
	exportThreadsSuccess
} from '../../actions';
// #endregion imports

function saveAsBlob(response, filename, contentType) {
	try {
		const blob = new Blob([response.data], { type: contentType });
		if (navigator.msSaveBlob) {
			navigator.msSaveBlob(blob, filename);
		} else {
			const saveBlob = navigator.webkitSaveBlob || navigator.mozSaveBlob || navigator.saveBlob;
			if (saveBlob === undefined) {
				throw new Error('Not supported');
			}
			saveBlob(blob, filename);
		}
		return true;
	} catch (e) {
		return false;
	}
}

function saveWithSimClick(response, contentType, urlCreator, filename) {
	const link = document.createElement('a');
	if (!('download' in link)) {
		return false;
	}
	try {
		const blob = new Blob([response.data], { type: contentType });
		const url = urlCreator.createObjectURL(blob);
		link.setAttribute('href', url);
		link.setAttribute('download', filename);
		const event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
		link.dispatchEvent(event);
		return true;
	} catch (ex) {
		return false;
	}
}

function saveWithWindowOpen(response, octetStreamMime, urlCreator) {
	const blob = new Blob([response.data], { type: octetStreamMime });
	const url = urlCreator.createObjectURL(blob);
	window.location = url;
}

function attemptFileSave(response) {
	const octetStreamMime = 'application/octet-stream';
	const { headers } = response;
	const filename = headers['x-filename'] || `${Date.now()}.xlsx`;
	const contentType = headers['content-type'] || octetStreamMime;
	const saveAsBlobSuccess = saveAsBlob(response, filename, contentType);
	if (saveAsBlobSuccess) {
		return;
	}
	const urlCreator = window.URL || window.webkitURL || window.mozURL || window.msURL;
	if (!urlCreator) {
		throw new Error('Could not export threads');
	}
	const saveWithSimClickSuccess = saveWithSimClick(response, contentType, urlCreator, filename);
	if (saveWithSimClickSuccess) {
		return;
	}
	saveWithWindowOpen(response, octetStreamMime, urlCreator);
}

function* exportThreads() {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/thread/export`, { responseType: 'arraybuffer' });
		yield attemptFileSave(response);
		yield put(exportThreadsSuccess());
	} catch (e) {
		yield put(exportThreadsFailure());
	}
}

export default function* exportThreadsSaga() {
	yield takeLatest(EXPORT_THREADS, exportThreads);
}
