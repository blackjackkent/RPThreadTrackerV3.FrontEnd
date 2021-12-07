import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function saveAsBlob(response, filename, contentType) {
	try {
		const blob = new Blob([response.data], {
			type: contentType
		});
		const saveBlob =
			navigator.msSaveBlob ||
			navigator.webkitSaveBlob ||
			navigator.mozSaveBlob ||
			navigator.saveBlob;
		if (saveBlob === undefined) {
			throw new Error('Not supported');
		}
		saveBlob(blob, filename);
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
		const blob = new Blob([response.data], {
			type: contentType
		});
		const url = urlCreator.createObjectURL(blob);
		link.setAttribute('href', url);
		link.setAttribute('download', filename);
		const event = document.createEvent('MouseEvents');
		event.initMouseEvent(
			'click',
			true,
			true,
			window,
			1,
			0,
			0,
			0,
			0,
			false,
			false,
			false,
			false,
			0,
			null
		);
		link.dispatchEvent(event);
		return true;
	} catch (ex) {
		return false;
	}
}

function saveWithWindowOpen(response, octetStreamMime, urlCreator) {
	const blob = new Blob([response.data], {
		type: octetStreamMime
	});
	const url = urlCreator.createObjectURL(blob);
	window.location.assign(url);
}

function attemptFileSave(response) {
	const octetStreamMime = 'application/octet-stream';
	const { headers } = response;
	// istanbul ignore next
	const filename = headers['x-filename'] || `${Date.now()}.xlsx`;
	// istanbul ignore next
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

function useGenerateExportedThreadsDocumentMutation() {
	const generateDocumentMutation = useMutation(({ includeHiatused, includeArchive }) => {
		return axios
			.get(`${API_BASE_URL}api/thread/export`, {
				responseType: 'arraybuffer',
				params: { includeHiatused, includeArchive }
			})
			.then((res) => {
				attemptFileSave(res);
				return Promise.resolve();
			});
	});
	return {
		generateDocument: generateDocumentMutation.mutateAsync,
		isLoading: generateDocumentMutation.isLoading
	};
}
export default useGenerateExportedThreadsDocumentMutation;
