// #region imports
import React from 'react';
import { shallowWithState } from '../../config/tests/helpers.unit';
import App from '../App';
// #endregion imports

// #region mocks
jest.mock('../utility/history', () => ({}));
jest.mock('../infrastructure/withPageViewTracker', () => WrappedComponent => WrappedComponent);
jest.mock('../display/containers/Layout', () => () => 'Layout');
jest.mock('../display/containers/LandingContainer', () => () => 'LandingContainer');
jest.mock('../display/containers/StaticContainer', () => () => 'StaticContainer');
jest.mock('../display/containers/Maintenance', () => () => 'Maintenance');
jest.mock('../display/containers/PublicContainer', () => () => 'PublicContainer');
jest.mock('../display/containers/AddThreadFromExtensionHandler', () => () => 'AddThreadFromExtensionHandler');
// #endregion mocks

const createTestProps = propOverrides => ({
	...propOverrides
});

const createTestState = stateOverrides => ({
	ui: { isMaintenanceMode: false },
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot when not in maintenance mode', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<App {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when in maintenance mode', () => {
			const props = createTestProps();
			const state = createTestState({ ui: { isMaintenanceMode: true } });
			const jsx = (<App {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});
