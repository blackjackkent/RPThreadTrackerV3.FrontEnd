// #region imports
import React from 'react';
import { shallowWithState } from '~/testhelpers/helpers.unit';
import App from '../App';
// #endregion imports

// #region mocks
jest.mock('../infrastructure/actions', () => ({}));
jest.mock('../utility/history', () => ({}));
jest.mock('../infrastructure/withPageViewTracker', () => (WrappedComponent) => WrappedComponent);
jest.mock('../display/containers/Layout', () => () => 'Layout');
jest.mock('../display/containers/StaticContainer', () => () => 'StaticContainer');
jest.mock('../display/containers/Maintenance', () => () => 'Maintenance');
jest.mock('../display/containers/PublicContainer', () => () => 'PublicContainer');
// prettier-ignore
jest.mock('../display/containers/AddThreadFromExtensionHandler', () => () => 'AddThreadFromExtensionHandler');
// #endregion mocks

const createTestProps = (propOverrides) => ({
	loadSiteTheme: jest.fn(),
	...propOverrides
});

const createTestState = (stateOverrides) => ({
	ui: {
		isMaintenanceMode: false,
		useLightTheme: false
	},
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = <App {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when in maintenance mode/light theme', () => {
			const props = createTestProps();
			const state = createTestState({
				ui: {
					isMaintenanceMode: true,
					useLightTheme: true
				}
			});
			const jsx = <App {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});
describe('behavior', () => {
	describe('componentDidMount/componentWillReceiveProps', () => {
		it('should set mobile sidebar visibility class', () => {
			document.body.classList = [];
			const props = createTestProps();
			const state = createTestState({
				ui: {
					isMaintenanceMode: true,
					useLightTheme: true
				}
			});
			const jsx = <App {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(document.body.classList).toHaveLength(1);
			expect(document.body.classList).toContain('light-theme');

			element.setProps({
				useLightTheme: false
			});
			expect(document.body.classList).toHaveLength(0);
		});
	});
});
