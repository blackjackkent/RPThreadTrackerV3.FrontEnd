import axios from 'axios';
import { call } from 'redux-saga/effects';
import upsertCharacterSaga from '../upsertCharacterSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('update', () => {
		it('should update character when character has ID', () => {
			const character = { characterId: 1 };
			const saga = new SagaTestWrapper(upsertCharacterSaga);
			saga.setup(call(axios.put, 'http://test-site/api/character/1', character), character);
			saga.expectPut({
				type: actions.UPSERT_CHARACTER_SUCCESS,
				data: character
			});
			saga.expectPut({
				type: actions.FETCH_CHARACTERS
			});
			return saga.execute({
				type: actions.UPSERT_CHARACTER,
				data: character
			});
		});
		it('should dispatch failure action on failed PUT', () => {
			const character = { characterId: 1 };
			const saga = new SagaTestWrapper(upsertCharacterSaga);
			saga.setupError(call(axios.put, 'http://test-site/api/character/1', character), 'Test error');
			saga.expectPut({
				type: actions.UPSERT_CHARACTER_FAILURE
			});
			return saga.execute({
				type: actions.UPSERT_CHARACTER,
				data: character
			});
		});
	});
	describe('insert', () => {
		it('should create character when character has no ID', () => {
			const character = { characterName: 'Test Character' };
			const saga = new SagaTestWrapper(upsertCharacterSaga);
			saga.setup(call(axios.post, 'http://test-site/api/character', character), character);
			saga.expectPut({
				type: actions.UPSERT_CHARACTER_SUCCESS,
				data: character
			});
			saga.expectPut({
				type: actions.FETCH_CHARACTERS
			});
			return saga.execute({
				type: actions.UPSERT_CHARACTER,
				data: character
			});
		});
		it('should dispatch failure action on failed POST', () => {
			const character = { characterName: 'Test Character' };
			const saga = new SagaTestWrapper(upsertCharacterSaga);
			saga.setupError(call(axios.post, 'http://test-site/api/character', character), 'Test error');
			saga.expectPut({
				type: actions.UPSERT_CHARACTER_FAILURE
			});
			return saga.execute({
				type: actions.UPSERT_CHARACTER,
				data: character
			});
		});
	});
});
