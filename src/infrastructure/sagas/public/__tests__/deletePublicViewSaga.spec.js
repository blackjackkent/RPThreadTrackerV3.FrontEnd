import axios from 'axios';
import { call } from 'redux-saga/effects';
import deletePublicViewSaga from '../deletePublicViewSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful DELETE', () => {
		const view = { id: 1 };
		const saga = new SagaTestWrapper(deletePublicViewSaga);
		saga.setup(call(axios.delete, 'http://test-site/api/publicviewmanagement/1'), {});
		saga.expectPut({
			type: actions.DELETE_PUBLIC_VIEW_SUCCESS
		});
		saga.expectPut({
			type: actions.FETCH_PUBLIC_VIEWS
		});
		return saga.execute({
			type: actions.DELETE_PUBLIC_VIEW,
			data: view
		});
	});
	it('should dispatch failure action on failed DELETE', () => {
		const view = { id: 1 };
		const saga = new SagaTestWrapper(deletePublicViewSaga);
		saga.setupError(call(axios.delete, 'http://test-site/api/publicviewmanagement/1'), 'Test error');
		saga.expectPut({
			type: actions.DELETE_PUBLIC_VIEW_FAILURE
		});
		return saga.execute({
			type: actions.DELETE_PUBLIC_VIEW,
			data: view
		});
	});
});
