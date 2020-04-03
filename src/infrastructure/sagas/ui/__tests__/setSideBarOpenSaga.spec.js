import setSideBarOpenSaga from '../setSideBarOpenSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

jest.mock('../../../cache', () => ({
	set: jest.fn()
}));
describe('saga behavior', () => {
	it('should dispatch success action with theme data', () => {
		const saga = new SagaTestWrapper(setSideBarOpenSaga);
		saga.expectPut({
			type: actions.LOAD_SIDEBAR_OPEN_SUCCESS,
			data: true
		});
		return saga.execute({
			type: actions.SET_SIDEBAR_OPEN,
			data: true
		});
	});
});
