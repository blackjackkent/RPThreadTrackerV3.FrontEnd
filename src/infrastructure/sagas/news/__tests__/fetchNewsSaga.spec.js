import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchNewsSaga from '../fetchNewsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/utility/helpers.unit';

global.TUMBLR_CLIENT_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful GET', () => {
		const response = { data: [{ postId: 12345 }, { postId: 23456 }, { postId: 34567 }] };
		const saga = new SagaTestWrapper(fetchNewsSaga);
		saga.setup(call(axios.get, 'http://test-site/api/news'), response);
		saga.expectPut({
			type: actions.FETCHED_NEWS_SUCCESS,
			data: response.data
		});
		return saga.execute({ type: actions.FETCH_NEWS });
	});
});
