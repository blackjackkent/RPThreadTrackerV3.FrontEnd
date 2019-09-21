import ReactGA from 'react-ga';
import analyticsSaga from '../analyticsSaga';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

jest.mock('react-ga', () => ({
	pageview: jest.fn(),
	event: jest.fn(),
	modalview: jest.fn()
}));

beforeEach(() => {
	jest.resetAllMocks();
});
describe('saga behavior', () => {
	it('should do nothing if action has no analytics property', () => {
		const action = {
			type: 'TEST_ACTION'
		};
		const saga = new SagaTestWrapper(analyticsSaga);
		return saga.execute(action)
			.then(() => {
				expect(ReactGA.pageview).toHaveBeenCalledTimes(0);
				expect(ReactGA.event).toHaveBeenCalledTimes(0);
				expect(ReactGA.modalview).toHaveBeenCalledTimes(0);
			});
	});
	it('should do nothing if action analytics have invalid func', () => {
		const action = {
			type: 'TEST_ACTION',
			analytics: {
				func: 'test'
			}
		};
		const saga = new SagaTestWrapper(analyticsSaga);
		return saga.execute(action)
			.then(() => {
				expect(ReactGA.pageview).toHaveBeenCalledTimes(0);
				expect(ReactGA.event).toHaveBeenCalledTimes(0);
				expect(ReactGA.modalview).toHaveBeenCalledTimes(0);
			});
	});
	it('should handle pageview action', () => {
		const action = {
			type: 'TEST_ACTION',
			analytics: {
				func: 'pageview'
			}
		};
		const saga = new SagaTestWrapper(analyticsSaga);
		return saga.execute(action)
			.then(() => {
				expect(ReactGA.pageview).toHaveBeenCalledTimes(1);
				expect(ReactGA.event).toHaveBeenCalledTimes(0);
				expect(ReactGA.modalview).toHaveBeenCalledTimes(0);
			});
	});
	it('should handle event action', () => {
		const action = {
			type: 'TEST_ACTION',
			analytics: {
				func: 'event'
			}
		};
		const saga = new SagaTestWrapper(analyticsSaga);
		return saga.execute(action)
			.then(() => {
				expect(ReactGA.pageview).toHaveBeenCalledTimes(0);
				expect(ReactGA.event).toHaveBeenCalledTimes(1);
				expect(ReactGA.modalview).toHaveBeenCalledTimes(0);
			});
	});
	it('should handle modalview action', () => {
		const action = {
			type: 'TEST_ACTION',
			analytics: {
				func: 'modalview'
			}
		};
		const saga = new SagaTestWrapper(analyticsSaga);
		return saga.execute(action)
			.then(() => {
				expect(ReactGA.pageview).toHaveBeenCalledTimes(0);
				expect(ReactGA.event).toHaveBeenCalledTimes(0);
				expect(ReactGA.modalview).toHaveBeenCalledTimes(1);
			});
	});
});
