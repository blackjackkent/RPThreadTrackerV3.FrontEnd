// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import DashboardSummaryWidget from '../DashboardSummaryWidget';
// #endregion imports

// #region mocks
jest.mock('../../../../../shared/LoadingIndicator', () => 'LoadingIndicator');
// #endregion mocks

const createTestProps = propOverrides => ({
	header: 33,
	icon: 'icon-list',
	isLoadingIconVisible: false,
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<DashboardSummaryWidget {...props}>Test</DashboardSummaryWidget>);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with loading indicator', () => {
			const props = createTestProps({ isLoadingIconVisible: true });
			const jsx = (<DashboardSummaryWidget {...props}>Test</DashboardSummaryWidget>);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
