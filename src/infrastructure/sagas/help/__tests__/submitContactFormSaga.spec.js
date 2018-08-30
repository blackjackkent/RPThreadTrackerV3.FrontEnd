import axios from 'axios';
import { call } from 'redux-saga/effects';
import submitContactFormSaga from '../submitContactFormSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful POST', () => {
		const saga = new SagaTestWrapper(submitContactFormSaga);
		saga.setup(call(axios.post, 'http://test-site/api/contact', 'Test message'), {});
		saga.expectPut({
			type: actions.SUBMIT_CONTACT_FORM_SUCCESS
		});
		return saga.execute({ type: actions.SUBMIT_CONTACT_FORM, data: 'Test message' });
	});
	it('should dispatch failure action on failed POST', () => {
		const saga = new SagaTestWrapper(submitContactFormSaga);
		saga.setupError(call(axios.post, 'http://test-site/api/contact', 'Test message'), 'Test error');
		saga.expectPut({
			type: actions.SUBMIT_CONTACT_FORM_FAILURE
		});
		return saga.execute({ type: actions.SUBMIT_CONTACT_FORM, data: 'Test message' });
	});
});
