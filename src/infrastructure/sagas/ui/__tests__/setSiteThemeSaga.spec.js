import setSiteThemeSaga from '../setSiteThemeSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

jest.mock('../../../cache', () => ({
	set: jest.fn()
}));
describe('saga behavior', () => {
	it('should dispatch success action with theme data', () => {
		const saga = new SagaTestWrapper(setSiteThemeSaga);
		saga.expectPut({
			type: actions.LOAD_SITE_THEME_SUCCESS,
			data: true
		});
		return saga.execute({
			type: actions.SET_SITE_THEME,
			data: true
		});
	});
});
