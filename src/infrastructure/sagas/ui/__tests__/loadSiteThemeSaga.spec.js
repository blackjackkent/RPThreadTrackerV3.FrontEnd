import loadSiteThemeSaga from '../loadSiteThemeSaga';
import * as actions from '../../../actions';
import * as cache from '../../../cache';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

jest.mock('../../../cache', () => ({
	get: jest.fn()
}));
describe('saga behavior', () => {
	it('should dispatch success action with theme data', () => {
		cache.get.mockReturnValue(true);
		const saga = new SagaTestWrapper(loadSiteThemeSaga);
		saga.expectPut({
			type: actions.LOAD_SITE_THEME_SUCCESS,
			data: true
		});
		return saga.execute({
			type: actions.LOAD_SITE_THEME
		});
	});
	it('should dispatch success action with dark theme if no cache', () => {
		cache.get.mockReturnValue(null);
		const saga = new SagaTestWrapper(loadSiteThemeSaga);
		saga.expectPut({
			type: actions.LOAD_SITE_THEME_SUCCESS,
			data: false
		});
		return saga.execute({
			type: actions.LOAD_SITE_THEME
		});
	});
});
