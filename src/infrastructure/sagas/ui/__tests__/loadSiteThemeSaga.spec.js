import loadSiteThemeSaga from '../loadSiteThemeSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

jest.mock('../../../cache', () => ({
	get: jest.fn(() => true)
}));
describe('saga behavior', () => {
	it('should dispatch success action with theme data', () => {
		const saga = new SagaTestWrapper(loadSiteThemeSaga);
		saga.expectPut({
			type: actions.LOAD_SITE_THEME_SUCCESS,
			data: true
		});
		return saga.execute({ type: actions.LOAD_SITE_THEME });
	});
});
