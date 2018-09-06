import { select } from 'redux-saga/effects';
import generateRandomThreadSaga from '../generateRandomThreadSaga';
import * as actions from '../../../actions';
import * as selectors from '../../../selectors';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

jest.mock('../../../selectors', () => ({
	getMyTurnThreads: jest.fn()
}));
global.API_BASE_URL = 'http://test-site/';
const threads = [
	{
		threadId: 1,
		status: { lastPostUrl: 'url1' }
	},
	{ threadId: 2 },
	{
		threadId: 3,
		status: { lastPostUrl: 'url3' }
	},
	{
		threadId: 4,
		status: {}
	},
	{
		threadId: 5,
		status: { lastPostUrl: 'url5' }
	}
];
describe('saga behavior', () => {
	it('should filter out threads without status and without post URL 1', () => {
		const mockMath = Object.create(global.Math);
		mockMath.random = () => 0.1;
		global.Math = mockMath;
		const saga = new SagaTestWrapper(generateRandomThreadSaga);
		saga.setup(select(selectors.getMyTurnThreads), threads);
		saga.expectPut({
			type: actions.GENERATED_RANDOM_THREAD_SUCCESS,
			data: threads[0]
		});
		return saga.execute({ type: actions.GENERATE_RANDOM_THREAD });
	});
	it('should filter out threads without status and without post URL 1', () => {
		const mockMath = Object.create(global.Math);
		mockMath.random = () => 0.5;
		global.Math = mockMath;
		const saga = new SagaTestWrapper(generateRandomThreadSaga);
		saga.setup(select(selectors.getMyTurnThreads), threads);
		saga.expectPut({
			type: actions.GENERATED_RANDOM_THREAD_SUCCESS,
			data: threads[2]
		});
		return saga.execute({ type: actions.GENERATE_RANDOM_THREAD });
	});
	it('should filter out threads without status and without post URL 1', () => {
		const mockMath = Object.create(global.Math);
		mockMath.random = () => 0.8;
		global.Math = mockMath;
		const saga = new SagaTestWrapper(generateRandomThreadSaga);
		saga.setup(select(selectors.getMyTurnThreads), threads);
		saga.expectPut({
			type: actions.GENERATED_RANDOM_THREAD_SUCCESS,
			data: threads[4]
		});
		return saga.execute({ type: actions.GENERATE_RANDOM_THREAD });
	});
});
