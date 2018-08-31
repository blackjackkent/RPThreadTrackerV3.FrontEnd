import axios from 'axios';
import * as matchers from 'redux-saga-test-plan/matchers';
import fetchPublicThreadsStatusSaga from '../fetchPublicThreadsStatusSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.TUMBLR_CLIENT_BASE_URL = 'http://test-site/';

const responseItems = [];
const myTurnResponseItems = [];
const theirTurnResponseItems = [];
const queuedResponseItems = [];

const initResponseData = () => {
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 10; j++) {
			const responseItem = {
				responseId: `${i}-${j}`,
				isCallingCharactersTurn: i % 2 === 0,
				isQueued: j % 2 === 0
			};
			responseItems.push(responseItem);
			if (responseItem.isQueued) {
				queuedResponseItems.push(responseItem);
			} else if (responseItem.isCallingCharactersTurn) {
				myTurnResponseItems.push(responseItem);
			} else {
				theirTurnResponseItems.push(responseItem);
			}
		}
	}
};
const getInitialAction = (turnFilter) => {
	const requests = [];
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 10; j++) {
			const request = {
				requestI: i,
				requestJ: j
			};
			requests.push(request);
		}
	}
	return {
		type: actions.FETCH_PUBLIC_THREADS_STATUS,
		data: {
			threadStatusRequestJson: JSON.stringify(requests),
			view: {
				turnFilter
			}
		}
	};
};
const setupSaga = (sagaWrapper) => {
	sagaWrapper.setupFn((effect, next) => {
		if (effect.fn === axios.post) {
			const requests = effect.args[1];
			const i = requests[0].requestI;
			const response = {
				data: responseItems.slice(i * 10, i * 10 + 10)
			};
			return response;
		}
		return next();
	});
};

beforeAll(() => {
	initResponseData();
});
describe('saga behavior', () => {
	it('puts five empty chunks and success if no turn filter provided', () => {
		const saga = new SagaTestWrapper(fetchPublicThreadsStatusSaga);
		const action = getInitialAction();
		setupSaga(saga);
		return saga.execute(action)
			.then((result) => {
				const { effects } = result;
				expect(effects.put).toHaveLength(6);
				for (let i = 0; i < 5; i++) {
					expect(effects.put[i].PUT.action.data).toEqual([]);
				}
				expect(effects.put[5].PUT.action.type).toEqual(
					actions.FETCHED_PUBLIC_THREADS_STATUS_SUCCESS
				);
			});
	});
	it('puts filtered chunks and success if turn filter is my turn', () => {
		const saga = new SagaTestWrapper(fetchPublicThreadsStatusSaga);
		const action = getInitialAction({ includeMyTurn: true });
		setupSaga(saga);
		return saga.execute(action)
			.then((result) => {
				const { effects } = result;
				expect(effects.put).toHaveLength(6);
				expect(effects.put[0].PUT.action.data).toHaveLength(5);
				expect(effects.put[1].PUT.action.data).toHaveLength(0);
				expect(effects.put[2].PUT.action.data).toHaveLength(5);
				expect(effects.put[3].PUT.action.data).toHaveLength(0);
				expect(effects.put[4].PUT.action.data).toHaveLength(5);
				expect(effects.put[5].PUT.action.type).toEqual(
					actions.FETCHED_PUBLIC_THREADS_STATUS_SUCCESS
				);
			});
	});
	it('puts filtered chunks and success if turn filter is their turn', () => {
		const saga = new SagaTestWrapper(fetchPublicThreadsStatusSaga);
		const action = getInitialAction({ includeTheirTurn: true });
		setupSaga(saga);
		return saga.execute(action)
			.then((result) => {
				const { effects } = result;
				expect(effects.put).toHaveLength(6);
				expect(effects.put[0].PUT.action.data).toHaveLength(0);
				expect(effects.put[1].PUT.action.data).toHaveLength(5);
				expect(effects.put[2].PUT.action.data).toHaveLength(0);
				expect(effects.put[3].PUT.action.data).toHaveLength(5);
				expect(effects.put[4].PUT.action.data).toHaveLength(0);
				expect(effects.put[5].PUT.action.type).toEqual(
					actions.FETCHED_PUBLIC_THREADS_STATUS_SUCCESS
				);
			});
	});
	it('puts filtered chunks and success if turn filter is queue', () => {
		const saga = new SagaTestWrapper(fetchPublicThreadsStatusSaga);
		const action = getInitialAction({ includeQueued: true });
		setupSaga(saga);
		return saga.execute(action)
			.then((result) => {
				const { effects } = result;
				expect(effects.put).toHaveLength(6);
				expect(effects.put[0].PUT.action.data).toHaveLength(5);
				expect(effects.put[1].PUT.action.data).toHaveLength(5);
				expect(effects.put[2].PUT.action.data).toHaveLength(5);
				expect(effects.put[3].PUT.action.data).toHaveLength(5);
				expect(effects.put[4].PUT.action.data).toHaveLength(5);
				expect(effects.put[5].PUT.action.type).toEqual(
					actions.FETCHED_PUBLIC_THREADS_STATUS_SUCCESS
				);
			});
	});
	it('should dispatch general failure on pre-chunk exception', () => {
		const saga = new SagaTestWrapper(fetchPublicThreadsStatusSaga);
		saga.expectPut({
			type: actions.FETCHED_PUBLIC_THREADS_STATUS_FAILURE
		});
		return saga.execute({
			type: actions.FETCH_PUBLIC_THREADS_STATUS
		});
	});
	it('should dispatch failure action on failed chunk', () => {
		const saga = new SagaTestWrapper(fetchPublicThreadsStatusSaga);
		saga.setupError(matchers.call.fn(axios.post), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_PUBLIC_THREADS_STATUS_CHUNK_FAILURE
		});
		return saga.execute(getInitialAction());
	});
});
