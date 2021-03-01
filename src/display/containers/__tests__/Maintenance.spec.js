// #region imports
import React from 'react';
import Maintenance from '../Maintenance';
// #endregion imports

jest.mock('../../../infrastructure/withPageViewTracker', () => (WrappedComponent) =>
	WrappedComponent
);

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const jsx = <Maintenance />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
