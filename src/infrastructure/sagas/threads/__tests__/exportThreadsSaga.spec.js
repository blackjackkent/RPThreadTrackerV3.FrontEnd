import axios from 'axios';
import { call } from 'redux-saga/effects';
import exportThreadsSaga from '../exportThreadsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper, initExportWindowValues } from '~/utility/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
const link = {
	download: true,
	setAttribute: jest.fn(),
	dispatchEvent: jest.fn()
};
beforeEach(() => {
	initExportWindowValues();
	jest.resetAllMocks();
	global.document.createElement = jest.fn();
	global.document.createElement.mockReturnValue(link);
});

describe('saga behavior', () => {
	describe('saveAsBlob', () => {
		it('should use msSaveBlob when possible', () => {
			global.navigator.msSaveBlob = jest.fn();
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(global.navigator.msSaveBlob).toHaveBeenCalledTimes(1);
			});
		});
		it('should fall back to webkitSaveBlob where possible', () => {
			global.navigator.webkitSaveBlob = jest.fn();
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(global.navigator.webkitSaveBlob).toHaveBeenCalledTimes(1);
			});
		});
		it('should fall back to mozSaveBlob where possible', () => {
			global.navigator.mozSaveBlob = jest.fn();
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(global.navigator.mozSaveBlob).toHaveBeenCalledTimes(1);
			});
		});
		it('should fall back to saveBlob where possible', () => {
			global.navigator.saveBlob = jest.fn();
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(global.navigator.saveBlob).toHaveBeenCalledTimes(1);
			});
		});
	});
	describe('saveWithSimClick', () => {
		it('should fail if no url creators are defined', () => {
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_FAILURE
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			});
		});
		it('should use window.URL if present', () => {
			global.window.URL = {
				createObjectURL: jest.fn()
			};
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(global.window.URL.createObjectURL).toHaveBeenCalledTimes(1);
			});
		});
		it('should fall back to window.webkitURL if present', () => {
			global.window.webkitURL = {
				createObjectURL: jest.fn()
			};
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(global.window.webkitURL.createObjectURL).toHaveBeenCalledTimes(1);
			});
		});
		it('should fall back to window.mozURL if present', () => {
			global.window.mozURL = {
				createObjectURL: jest.fn()
			};
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(global.window.mozURL.createObjectURL).toHaveBeenCalledTimes(1);
			});
		});
		it('should fall back to window.msURL if present', () => {
			global.window.msURL = {
				createObjectURL: jest.fn()
			};
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(global.window.msURL.createObjectURL).toHaveBeenCalledTimes(1);
			});
		});
	});
	describe('saveWithWindowOpen', () => {
		it('should fall back to window.open if simclick link has no download property', () => {
			global.document.createElement = jest.fn();
			global.document.createElement.mockReturnValue({});
			global.window.URL = {
				createObjectURL: jest.fn()
			};
			global.window.URL.createObjectURL.mockReturnValue('http://test-export-url/');
			global.window.location.assign = jest.fn();
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(window.location.assign).toHaveBeenCalledTimes(1);
				expect(window.location.assign).toHaveBeenLastCalledWith('http://test-export-url/');
			});
		});
		it('should fall back to window.open if simclick link throws exception', () => {
			global.document.createElement = jest.fn();
			global.document.createElement.mockReturnValue({
				download: true,
				setAttribute: null
			});
			global.window.URL = {
				createObjectURL: jest.fn()
			};
			global.window.URL.createObjectURL.mockReturnValue('http://test-export-url/');
			global.window.location.assign = jest.fn();
			const response = {
				headers: {
					'content-type': 'application/test',
					'x-filename': 'Test File'
				}
			};
			const saga = new SagaTestWrapper(exportThreadsSaga);
			saga.setup(call(axios.get, 'http://test-site/api/thread/export', {
				responseType: 'arraybuffer',
				params: 'test-data'
			}), response);
			saga.expectPut({
				type: actions.EXPORT_THREADS_SUCCESS
			});
			return saga.execute({
				type: actions.EXPORT_THREADS,
				data: 'test-data'
			}).then(() => {
				expect(window.location.assign).toHaveBeenCalledTimes(1);
				expect(window.location.assign).toHaveBeenLastCalledWith('http://test-export-url/');
			});
		});
	});
});
