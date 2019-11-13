import loadSideBarOpenSaga from '../loadSideBarOpenSaga';
import * as actions from '../../../actions';
import * as cache from '../../../cache';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

jest.mock('../../../cache', () => ({
	get: jest.fn()
}));
describe('saga behavior', () => {
	it('should dispatch success action with open state from cache', () => {
		cache.get.mockReturnValue(false);
		const saga = new SagaTestWrapper(loadSideBarOpenSaga);
		saga.expectPut({
			type: actions.LOAD_SIDEBAR_OPEN_SUCCESS,
			data: false
		});
		return saga.execute({ type: actions.LOAD_SIDEBAR_OPEN });
	});
	it('should dispatch success action with side bar open by default', () => {
		cache.get.mockReturnValue(null);
		const saga = new SagaTestWrapper(loadSideBarOpenSaga);
		saga.expectPut({
			type: actions.LOAD_SIDEBAR_OPEN_SUCCESS,
			data: true
		});
		return saga.execute({ type: actions.LOAD_SIDEBAR_OPEN });
	});
});
