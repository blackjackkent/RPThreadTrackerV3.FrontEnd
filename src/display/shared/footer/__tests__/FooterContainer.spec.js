// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper, shallowWithState } from '../../../../../config/tests/helpers.unit';
import FooterContainer from '../FooterContainer';
// #endregion imports

jest.mock('../Footer', () => 'Footer');
jest.mock('../../../../infrastructure/actions', () => ({}));

const createTestProps = propOverrides => ({
	setSiteTheme: jest.fn(),
	...propOverrides
});
const createTestState = stateOverrides => ({
	ui: {
		useLightTheme: true
	},
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<FooterContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});
describe('behavior', () => {
	describe('themeToggle', () => {
		it('should dispatch theme toggle action', () => {
			const setSiteTheme = jest.fn();
			const props = createTestProps({ setSiteTheme });
			const state = createTestState();
			const jsx = (<FooterContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().themeToggle();
			expect(setSiteTheme).toHaveBeenCalledTimes(1);
			expect(setSiteTheme).toHaveBeenCalledWith(false);
		});
	});
});
