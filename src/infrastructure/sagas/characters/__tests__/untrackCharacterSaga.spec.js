import axios from 'axios';
import { call } from 'redux-saga/effects';
import untrackCharacterSaga from '../untrackCharacterSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful DELETE', () => {
		const character = {
			characterId: 1
		};
		const saga = new SagaTestWrapper(untrackCharacterSaga);
		saga.setup(call(axios.delete, 'http://test-site/api/character/1'), {});
		saga.expectPut({
			type: actions.UNTRACK_CHARACTER_SUCCESS
		});
		saga.expectPut({
			type: actions.FETCH_CHARACTERS
		});
		return saga.execute({
			type: actions.UNTRACK_CHARACTER,
			data: character
		});
	});
	it('should dispatch failure action on failed DELETE', () => {
		const character = {
			characterId: 1
		};
		const saga = new SagaTestWrapper(untrackCharacterSaga);
		saga.setupError(call(axios.delete, 'http://test-site/api/character/1'), 'Test error');
		saga.expectPut({
			type: actions.UNTRACK_CHARACTER_FAILURE
		});
		return saga.execute({
			type: actions.UNTRACK_CHARACTER,
			data: character
		});
	});
});
