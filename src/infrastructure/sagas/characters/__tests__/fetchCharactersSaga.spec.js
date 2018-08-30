import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchCharactersSaga from '../fetchCharactersSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful GET', () => {
		const characters = { data: [{ characterId: 1 }, { characterId: 2 }, { characterId: 3 }] };
		const saga = new SagaTestWrapper(fetchCharactersSaga);
		saga.setup(call(axios.get, 'http://test-site/api/character'), characters);
		saga.expectPut({
			type: actions.FETCHED_CHARACTERS_SUCCESS,
			data: characters.data
		});
		return saga.execute({ type: actions.FETCH_CHARACTERS });
	});
	it('should dispatch failure action on failed GET', () => {
		const saga = new SagaTestWrapper(fetchCharactersSaga);
		saga.setupError(call(axios.get, 'http://test-site/api/character'), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_CHARACTERS_FAILURE
		});
		return saga.execute({ type: actions.FETCH_CHARACTERS });
	});
});
