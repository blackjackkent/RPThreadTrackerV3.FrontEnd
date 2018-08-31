import axios from 'axios';
import { call } from 'redux-saga/effects';
import upsertPublicViewSaga from '../upsertPublicViewSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('update', () => {
		it('should update view when view has ID', () => {
			const view = { id: 1 };
			const saga = new SagaTestWrapper(upsertPublicViewSaga);
			saga.setup(call(axios.put, 'http://test-site/api/publicviewmanagement/1', view), view);
			saga.expectPut({
				type: actions.UPSERT_PUBLIC_VIEW_SUCCESS,
				data: view
			});
			saga.expectPut({
				type: actions.FETCH_PUBLIC_VIEWS
			});
			return saga.execute({
				type: actions.UPSERT_PUBLIC_VIEW,
				data: view
			});
		});
		it('should dispatch failure action on failed PUT', () => {
			const view = { id: 1 };
			const saga = new SagaTestWrapper(upsertPublicViewSaga);
			saga.setupError(call(axios.put, 'http://test-site/api/publicviewmanagement/1', view), 'Test error');
			saga.expectPut({
				type: actions.UPSERT_PUBLIC_VIEW_FAILURE
			});
			return saga.execute({
				type: actions.UPSERT_PUBLIC_VIEW,
				data: view
			});
		});
	});
	describe('insert', () => {
		it('should create view when view has no ID', () => {
			const view = { slug: 'test-view' };
			const saga = new SagaTestWrapper(upsertPublicViewSaga);
			saga.setup(call(axios.post, 'http://test-site/api/publicviewmanagement', view), view);
			saga.expectPut({
				type: actions.UPSERT_PUBLIC_VIEW_SUCCESS,
				data: view
			});
			saga.expectPut({
				type: actions.FETCH_PUBLIC_VIEWS
			});
			return saga.execute({
				type: actions.UPSERT_PUBLIC_VIEW,
				data: view
			});
		});
		it('should dispatch failure action on failed POST', () => {
			const view = { slug: 'test-view' };
			const saga = new SagaTestWrapper(upsertPublicViewSaga);
			saga.setupError(call(axios.post, 'http://test-site/api/publicviewmanagement', view), 'Test error');
			saga.expectPut({
				type: actions.UPSERT_PUBLIC_VIEW_FAILURE
			});
			return saga.execute({
				type: actions.UPSERT_PUBLIC_VIEW,
				data: view
			});
		});
	});
});
