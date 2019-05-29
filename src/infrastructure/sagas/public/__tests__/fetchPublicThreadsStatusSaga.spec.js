import axios from 'axios';
import * as matchers from 'redux-saga-test-plan/matchers';
import fetchPublicThreadsStatusSaga from '../fetchPublicThreadsStatusSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/utility/helpers.unit';

global.TUMBLR_CLIENT_BASE_URL = 'http://test-site/';

const responseItems = [];

const initResponseData = () => {
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 10; j++) {
			const responseItem = {
				responseId: `${i}-${j}`,
				isCallingCharactersTurn: i % 2 === 0,
				isQueued: j % 2 === 0
			};
			responseItems.push(responseItem);
		}
	}
};
const getInitialAction = () => {
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
			threadStatusRequestJson: JSON.stringify(requests)
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
	it('puts five chunks and success', () => {
		const saga = new SagaTestWrapper(fetchPublicThreadsStatusSaga);
		const action = getInitialAction();
		setupSaga(saga);
		return saga.execute(action)
			.then((result) => {
				const { effects } = result;
				expect(effects.put).toHaveLength(6);
				for (let i = 0; i < 5; i++) {
					expect(effects.put[i].PUT.action.data).toHaveLength(10);
				}
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
