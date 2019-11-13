import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchTagsSaga from '../fetchTagsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful GET', () => {
		const tags = { data: ['tag1', 'tag2', 'tag3'] };
		const saga = new SagaTestWrapper(fetchTagsSaga);
		saga.setup(call(axios.get, 'http://test-site/api/thread/tags'), tags);
		saga.expectPut({
			type: actions.FETCHED_TAGS_SUCCESS,
			data: tags.data
		});
		return saga.execute({ type: actions.FETCH_TAGS });
	});
	it('should dispatch failure action on failed GET', () => {
		const saga = new SagaTestWrapper(fetchTagsSaga);
		saga.setupError(call(axios.get, 'http://test-site/api/thread/tags'), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_TAGS_FAILURE
		});
		return saga.execute({ type: actions.FETCH_TAGS });
	});
});
